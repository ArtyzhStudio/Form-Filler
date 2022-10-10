var first = document.getElementById("fillList");
console.log(first);
first.addEventListener("click", fillListOfForms);
var second = document.querySelector("#fill");
console.log(second);
second.addEventListener("click", fillForm);

function fillListOfForms() {
	var cur = chrome.tabs.query({ active: true, lastFocusedWindow: true });
	alert(cur.id);
	chrome.tabs.executeScript({ file: "listFilling.js" })
	console.log("List completed successfuly!");
}

function fillForm() {
	console.log("Filling form...")
	var cur = chrome.tabs.query({ active: true, lastFocusedWindow: true });
	alert(cur.id);
	chrome.tabs.executeScript({ file: "formFilling.js" })
	console.log("Form completed successfuly!");
}