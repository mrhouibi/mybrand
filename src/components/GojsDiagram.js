import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

function GojsDiagram({ nodeDataArray, linkDataArray }) {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);

  useEffect(() => {
    if (diagramInstance.current) return;

    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, diagramRef.current, {
      'undoManager.isEnabled': true,
      'animationManager.isEnabled': true,
      layout: $(go.TreeLayout, {
        angle: 0,
        layerSpacing: 80,
        nodeSpacing: 30,
      }),
      initialAutoScale: go.Diagram.Uniform,
      contentAlignment: go.Spot.Center,
    });

    // Node template
    diagram.nodeTemplate = $(
      go.Node,
      'Auto',
      {
        shadowVisible: true,
        shadowOffset: new go.Point(3, 3),
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.1)',
      },
      $(
        go.Shape,
        'RoundedRectangle',
        {
          strokeWidth: 0,
          fill: '#6c63ff',
          portId: '',
          fromLinkable: true,
          toLinkable: true,
          cursor: 'pointer',
        },
        new go.Binding('fill', 'color')
      ),
      $(
        go.Panel,
        'Vertical',
        { margin: 16 },
        $(
          go.TextBlock,
          {
            font: 'bold 14px Inter, sans-serif',
            stroke: 'white',
            margin: new go.Margin(0, 0, 6, 0),
          },
          new go.Binding('text', 'name')
        ),
        $(
          go.TextBlock,
          {
            font: '12px Inter, sans-serif',
            stroke: 'rgba(255,255,255,0.8)',
          },
          new go.Binding('text', 'role')
        )
      )
    );

    // Link template
    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 10 },
      $(go.Shape, { strokeWidth: 2, stroke: '#ced4da' }),
      $(go.Shape, { toArrow: 'Standard', fill: '#ced4da', stroke: null })
    );

    // Set model
    diagram.model = new go.GraphLinksModel(
      nodeDataArray || defaultNodes,
      linkDataArray || defaultLinks
    );

    diagramInstance.current = diagram;

    return () => {
      diagram.div = null;
    };
  }, [nodeDataArray, linkDataArray]);

  return (
    <div className="diagram-wrapper">
      <div ref={diagramRef} className="diagram-container" />
    </div>
  );
}

// Default data if none provided
const defaultNodes = [
  { key: 1, name: 'CEO', role: 'Leadership', color: '#6c63ff' },
  { key: 2, name: 'CTO', role: 'Technology', color: '#ff6584' },
  { key: 3, name: 'CMO', role: 'Marketing', color: '#00d2ff' },
  { key: 4, name: 'CFO', role: 'Finance', color: '#00c851' },
  { key: 5, name: 'Lead Dev', role: 'Engineering', color: '#ff9800' },
  { key: 6, name: 'Designer', role: 'UI/UX', color: '#e040fb' },
  { key: 7, name: 'DevOps', role: 'Infrastructure', color: '#ff5252' },
  { key: 8, name: 'Content Lead', role: 'Content', color: '#448aff' },
  { key: 9, name: 'SEO Specialist', role: 'Growth', color: '#69f0ae' },
];

const defaultLinks = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 6 },
  { from: 2, to: 7 },
  { from: 3, to: 8 },
  { from: 3, to: 9 },
];

export default GojsDiagram;