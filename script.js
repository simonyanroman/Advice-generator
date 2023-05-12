"use strict";

let advice_id = document.querySelector("#advice_id");
let advice_text = document.querySelector("#advice_text");

let dice = document.querySelector(".dice");

let retrieved_id, retrieved_advice;

async function request() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  retrieved_id = data.slip.id;
  retrieved_advice = data.slip.advice;

  advice_id.textContent = `advice #${retrieved_id}`;
  advice_text.textContent = `"${retrieved_advice}"`;
}

dice.addEventListener("click", function () {
  console.log(request());
});
