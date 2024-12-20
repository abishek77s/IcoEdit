figma.showUI(__html__, { width: 300, height: 150 });

figma.ui.onmessage = async (message) => {
  if (message.type === 'normalize') {
    const { strokeWidth } = message;
    const selectedNodes = figma.currentPage.selection;

    if (selectedNodes.length === 0) {
      figma.notify("Please select at least one SVG icon.");
      return;
    }

    for (const node of selectedNodes) {
      if ("strokes" in node && node.strokes.length > 0) {
        node.strokeWeight = strokeWidth;
      }
    }

    figma.notify(`Normalized stroke width to ${strokeWidth}px.`);
    figma.closePlugin();
  }
};
