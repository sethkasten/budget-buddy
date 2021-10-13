"use strict";
//
const budgetForm = document.querySelector(".budget-form");
const remainingBalance = document.querySelector(".balance");
const itemDescriptionForm = document.querySelector(".item-description-form");
document.querySelector(".total").textContent = "$0.00";

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let budget = document.querySelector("#budget").value;
  document.querySelector(".total").textContent = document
    .querySelector(".total")
    .textContent.slice(1);
  let total = parseInt(document.querySelector(".total").textContent);
  let balance = budget - total;
  document.querySelector(".total").textContent = `$${total}`;
  remainingBalance.textContent = `$${balance}`;
});
console.log();

itemDescriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
