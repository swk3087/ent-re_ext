document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  chrome.storage.local.get({ injectionEnabled: true }, result => {
    updateButton(result.injectionEnabled);
  });

  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get({ injectionEnabled: true }, result => {
      const newState = !result.injectionEnabled;
      chrome.storage.local.set({ injectionEnabled: newState }, () => {
        updateButton(newState);
      });
    });
  });

  function updateButton(enabled) {
    toggleButton.textContent = enabled ? "ON (클릭하면 OFF)" : "OFF (클릭하면 ON)";
  }
});