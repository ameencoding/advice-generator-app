"use strict";
const btn = document.querySelector(".generate");
const blockquote = document.querySelector("blockquote");
const adviceId = document.querySelector(".advice-id");

const url = "https://api.adviceslip.com/advice";

const getAdvice = function () {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (d) {
      adviceId.textContent = `Advice: #${d.slip.id}`;
      blockquote.textContent = ` "${d.slip.advice}" `;
    });
};

getAdvice();

btn.addEventListener("click", function () {
  getAdvice();
});
