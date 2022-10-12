window.onbeforeunload = null;

console.log("Filling list of forms...")
const list = document.querySelectorAll(".form");
for (var i of list) {
    var cur = chrome.tabs.create({ active: false, url: i.href }, (tab => tab));
    chrome.scripting.executeScript({
        target: { tabId: cur.id },
        file: "formFilling.js"
    }).then(() => { chrome.tab.discard(cur.id) })
}
console.log("List filled!")