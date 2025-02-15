chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("playentry.org")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        const script = document.createElement("script");
        script.src = "https://swk3087.github.io/ent-re/main.js";
        script.type = "text/javascript";
        script.defer = true;
        document.head.appendChild(script);
      }
    });
  }
});
