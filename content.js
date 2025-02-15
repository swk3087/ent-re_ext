chrome.storage.local.get({ injectionEnabled: true }, result => {
  if (result.injectionEnabled) {
    import("https://swk3087.github.io/ent-re/main.js").catch(() => {});
  }
});