var _a;
(_a = document.getElementById('applyButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const strokeWidthInput = document.getElementById('strokeWidth');
    const strokeWidth = parseFloat(strokeWidthInput.value);
    if (isNaN(strokeWidth) || strokeWidth < 0) {
        alert("Please enter a valid stroke width.");
        return;
    }
    parent.postMessage({ pluginMessage: { type: 'normalize', strokeWidth } }, '*');
});
