console.log("Filling list of forms...")
const list = document.querySelectorAll(".form");
for (var i of list) {
    var cur = chrome.tabs.create({ active: false, url: i.href }, (tab => tab));
    chrome.tabs.executeScript(cur.id, { file: "formFilling.js" })
        .then(() => chrome.tabs.discard(cur.id));
}
console.log("List filled!")