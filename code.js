var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 300, height: 150 });
figma.ui.onmessage = (message) => __awaiter(this, void 0, void 0, function* () {
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
});
