'unsafe-inline'
function fillListOfForms() {
	const list = document.querySelectorAll(".form");
	for (var i of list) {
		var cur = chrome.tabs.create({ active: false, url: i.href }, (tab => tab));
		chrome.tabs.executeScript(cur.id, { file: "formFilling.js" })
			.then(() => chrome.tabs.discard(cur.id));
	}
	alert("List completed successfuly!");
}

function fillForm() {
	var cur = chrome.tabs.query({ active: true, lastFocusedWindow: true });
	alert(cur.id);
	chrome.tabs.executeScript(null, { file: "formFilling.js" })
	alert("Form completed successfuly!");
}