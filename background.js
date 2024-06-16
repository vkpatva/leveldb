chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ hello: "world" }, () => {
        console.log("Hello world value is set.");
    });
});
