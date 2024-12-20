document.getElementById('applyButton')?.addEventListener('click', () => {
    const strokeWidthInput = document.getElementById('strokeWidth') as HTMLInputElement;
    const strokeWidth = parseFloat(strokeWidthInput.value);
  
    if (isNaN(strokeWidth) || strokeWidth < 0) {
      alert("Please enter a valid stroke width.");
      return;
    }
  
    parent.postMessage({ pluginMessage: { type: 'normalize', strokeWidth } }, '*');
  });
  