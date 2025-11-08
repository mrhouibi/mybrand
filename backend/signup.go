package backend

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"log"
	"net/http"
	"regexp"
	"time"

	"forum/database"

	"golang.org/x/crypto/bcrypt"
)

var (
	emailRe    = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	usernameRe = regexp.MustCompile(`^[\p{L}\p{N}_\-. ]{2,50}$`)
	msgs       = map[string]string{
		"InvalidForm":            "Invalid form",
		"AllFieldsRequired":      "All fields are required",
		"InvalidUsername":        "Invalid username (2-50 chars)",
		"InvalidEmail":           "Invalid email",
		"ShortPassword":          "Password must be at least 8 characters",
		"DatabaseError":          "Database error",
		"EmailAlreadyTaken":      "Email already taken",
		"UsernameAlreadyTaken":   "Username already taken",
		"ErrorCreatingUser":      "Error creating user",
		"ServerError":            "Server error",
		"TokenGenerationFailure": "Failed to generate session token",
		"ErrorCreatingSession":   "Error creating session",
	}
)

func SignupHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		if err := templates.ExecuteTemplate(w, "signup.html", map[string]string{"Error": ""}); err != nil {
			log.Printf("template render error (GET /signup): %v", err)
			http.Error(w, msgs["ServerError"], http.StatusInternalServerError)
		}
		return

	case http.MethodPost:
		if err := r.ParseForm(); err != nil {
			log.Printf("parse form error: %v", err)
			http.Error(w, msgs["InvalidForm"], http.StatusBadRequest)
			return
		}

		username := r.FormValue("username")
		email := r.FormValue("email")
		password := r.FormValue("password")

		if username == "" || email == "" || password == "" {
			http.Error(w, msgs["AllFieldsRequired"], http.StatusBadRequest)
			return
		}
		if !usernameRe.MatchString(username) {
			http.Error(w, msgs["InvalidUsername"], http.StatusBadRequest)
			return
		}
		if !emailRe.MatchString(email) {
			http.Error(w, msgs["InvalidEmail"], http.StatusBadRequest)
			return
		}
		if len(password) < 8 {
			http.Error(w, msgs["ShortPassword"], http.StatusBadRequest)
			return
		}

		ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
		defer cancel()

		// Check email and username uniqueness
		var emailExists, usernameExists int
		if err := database.DB.QueryRowContext(ctx, "SELECT COUNT(1) FROM users WHERE email = ?", email).Scan(&emailExists); err != nil {
			log.Printf("email uniqueness check error: %v", err)
			http.Error(w, msgs["DatabaseError"], http.StatusInternalServerError)
			return
		}
		if emailExists > 0 {
			http.Error(w, msgs["EmailAlreadyTaken"], http.StatusConflict)
			return
		}

		if err := database.DB.QueryRowContext(ctx, "SELECT COUNT(1) FROM users WHERE username = ?", username).Scan(&usernameExists); err != nil {
			log.Printf("username uniqueness check error: %v", err)
			http.Error(w, msgs["DatabaseError"], http.StatusInternalServerError)
			return
		}
		if usernameExists > 0 {
			http.Error(w, msgs["UsernameAlreadyTaken"], http.StatusConflict)
			return
		}

		hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
		if err != nil {
			log.Printf("bcrypt generate error: %v", err)
			http.Error(w, msgs["ServerError"], http.StatusInternalServerError)
			return
		}

		tx, err := database.DB.BeginTx(ctx, nil)
		if err != nil {
			log.Printf("db begin tx error: %v", err)
			http.Error(w, msgs["ServerError"], http.StatusInternalServerError)
			return
		}
		defer func() { _ = tx.Rollback() }()

		createdAt := time.Now().UTC().Format("2006-01-02 15:04:05")
		res, err := tx.ExecContext(ctx, "INSERT INTO users (username, email, password_hash, created_at) VALUES (?, ?, ?, ?)",
			username, email, string(hash), createdAt)
		if err != nil {
			log.Printf("insert user error: %v", err)
			http.Error(w, msgs["ErrorCreatingUser"], http.StatusInternalServerError)
			return
		}

		userID, err := res.LastInsertId()
		if err != nil {
			log.Printf("last insert id error: %v", err)
			http.Error(w, msgs["ServerError"], http.StatusInternalServerError)
			return
		}

		token, err := generateRandomToken()
		if err != nil {
			log.Printf("generate token error: %v", err)
			http.Error(w, msgs["TokenGenerationFailure"], http.StatusInternalServerError)
			return
		}
		exp := time.Now().Add(24 * time.Hour).UTC()

		_, err = tx.ExecContext(ctx, "INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)", token, userID, exp.Format("2006-01-02 15:04:05"))
		if err != nil {
			log.Printf("insert session error: %v", err)
			http.Error(w, msgs["ErrorCreatingSession"], http.StatusInternalServerError)
			return
		}

		if err := tx.Commit(); err != nil {
			log.Printf("tx commit error: %v", err)
			http.Error(w, msgs["ServerError"], http.StatusInternalServerError)
			return
		}

		http.SetCookie(w, &http.Cookie{
			Name:     "session_token",
			Value:    token,
			Expires:  exp,
			Path:     "/",
			HttpOnly: true,
			SameSite: http.SameSiteLaxMode,
			Secure:   true, // Enable in production
		})

		http.Redirect(w, r, "/", http.StatusSeeOther)

	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func generateRandomToken() (string, error) {
	b := make([]byte, 32)
	if _, err := rand.Read(b); err != nil {
		return "", err
	}
	return hex.EncodeToString(b), nil
}
