window.onbeforeunload = null;

var first = document.getElementById("fillList");
console.log(first);
first.addEventListener("click", fillListOfForms);
var second = document.querySelector("#fill");
console.log(second);
second.addEventListener("click", fillForm);

function fillListOfForms() {
	console.log("Filling list...")
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
		console.log(tab);
		chrome.scripting.executeScript({
			"target": { "tabId": tab.id },
			"files": ["listFilling.js"]
		}, () => { console.log("List completed successfuly!") })
	});
}

function fillForm() {
	console.log("Filling form...")
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
		console.log(tab);
		chrome.scripting.executeScript({
			"target": { "tabId": tab.id },
			"files": ["formFilling.js"]
		}, () => { console.log("Form completed successfuly!") })
	});
	/*console.log(cur);
	chrome.scripting.executeScript({
		"target": { "tabId": cur.id },
		"file": "formFilling.js"
	})*/
	//console.log("Form completed successfuly!");
}