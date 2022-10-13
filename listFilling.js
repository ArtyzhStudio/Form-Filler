console.log("Filling list of forms...")
list = document.querySelectorAll(".form");
console.log(list);
for (let i of list) {
    chrome.tabs.create({ active: false, url: i.href, selected: "active" }, ([cur]) => {
        console.log(cur);
        chrome.scripting.executeScript({
            target: { tabId: cur.id },
            file: "formFilling.js"
        }, () => chrome.tab.discard(cur.id))
    });
}
console.log("List filled!")