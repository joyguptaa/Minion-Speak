var btnTranslate = document.querySelector("#btn-translater");
var txtInput = document.querySelector("#txt-input");
function clickEventHandler() {
    console.log("I was clicked");
    console.log("Input Was : ", txtInput.value);
};

btnTranslate.addEventListener("click", clickEventHandler); 

