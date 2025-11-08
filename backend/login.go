package backend

import (
	"database/sql"
	"net/http"
	"time"

	"forum/database"

	"golang.org/x/crypto/bcrypt"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		if err := templates.ExecuteTemplate(w, "login.html", map[string]string{"Error": ""}); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
		return

	case http.MethodPost:
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Invalid form submission", http.StatusBadRequest)
			return
		}

		email, password := r.FormValue("email"), r.FormValue("password")
		if email == "" || password == "" {
			templates.ExecuteTemplate(w, "login.html", map[string]string{"Error": "Email and password required"})
			return
		}

		var userID int64
		var passwordHash string
		err := database.DB.QueryRow("SELECT id, password_hash FROM users WHERE email = ?", email).Scan(&userID, &passwordHash)
		if err == sql.ErrNoRows {
			templates.ExecuteTemplate(w, "login.html", map[string]string{"Error": "Invalid credentials"})
			return
		} else if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		if bcrypt.CompareHashAndPassword([]byte(passwordHash), []byte(password)) != nil {
			templates.ExecuteTemplate(w, "login.html", map[string]string{"Error": "Invalid credentials"})
			return
		}

		// Example session creation (you can replace this with your session logic)
		http.SetCookie(w, &http.Cookie{
			Name:    "session_token",
			Value:   "example_token", // Replace with a real token
			Expires: time.Now().Add(24 * time.Hour),
		})

		http.Redirect(w, r, "/dashboard", http.StatusSeeOther)
	}
}
