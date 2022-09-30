'unsafe-inline'
var form = document.querySelector("form");
var btn1 = document.querySelector("#i12");
var btn2 = document.querySelector("#i18");
var btn3 = document.querySelector("#i34");
var inp = document.querySelector("input[type='text']");

btn1.click();
btn2.click();
btn3.click();
inp.value = "ijfprejgmperflkre iergfo neiutbj nounrf";

window.onbeforeunload = null;

form.submit();