// ! Select elements

let myinput = document.querySelector(".input");

let mybutton = document.querySelector("button");
let msgElement = document.querySelector(".message");

mybutton.addEventListener("click", function () {
  let inputValue = myinput.value;
  if (inputValue === "") {
    msgElement.textContent = "pls insert your msg... !";
    msgElement.style.cssText = `color:red ; background-color:yellow ;display: inline-block`;
  } else {
    msgElement.textContent = inputValue;
    myinput.value = "";
    msgElement.style.cssText = ` color:black;
    font-size: 20px;`;
  }
});
