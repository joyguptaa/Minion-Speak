var btnTranslate = document.querySelector("#btn-translater");
var txtInput = document.querySelector("#txt-input");
var outuptDiv = document.querySelector("#output-box");

function clickEventHandler() {
    outuptDiv.innerText = txtInput.value + "Translated";
};

btnTranslate.addEventListener("click", clickEventHandler); 

