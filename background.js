chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("playentry.org")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: () => {
        import("https://swk3087.github.io/ent-re/main.js").catch(err => console.error("스크립트 로드 실패:", err));
      }
    });
  }
});