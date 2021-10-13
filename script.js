"use strict";
//
const budgetForm = document.querySelector(".budget-form");
const remainingBalance = document.querySelector(".balance");
const itemDescriptionForm = document.querySelector(".item-description-form");
const itemTableBody = document.querySelector(".item-table-body");
document.querySelector(".total").textContent = "$0.00";
document.querySelector(".Bills").textContent = "$0.00";
document.querySelector(".Clothing").textContent = "$0.00";
document.querySelector(".Entertainment").textContent = "$0.00";
document.querySelector(".Food").textContent = "$0.00";

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let budget = document.querySelector("#budget").value;
  document.querySelector(".total").textContent = document
    .querySelector(".total")
    .textContent.slice(1);
  let total = parseFloat(document.querySelector(".total").textContent);
  let balance = budget - total;
  document.querySelector(".total").textContent = `$${total}`;
  remainingBalance.textContent = `$${balance}`;
});
console.log();

itemDescriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const addedItemRow = document.createElement("tr");
  itemTableBody.append(addedItemRow);
  for (let i = 0; i < 4; i++) {
    const addedItem = document.createElement("td");
    addedItemRow.append(addedItem);
    if (i === 0) {
      addedItem.textContent = document.querySelector("#item-description").value;
    } else if (i === 1) {
      addedItem.textContent = document.querySelector("#category").value;
    } else if (i === 2) {
      addedItem.textContent = `$${document.querySelector("#amount").value}`;
    } else if (i === 3) {
      const button = document.createElement("button");
      addedItem.append(button);
      button.textContent = "Delete";
      button.classList.add("clear-delete");
    }
  }
  //   grabs category we've selected
  const category = document.querySelector("#category").value;
  //   removes $ sign
  document.querySelector(`.${category}`).textContent = document
    .querySelector(`.${category}`)
    .textContent.slice(1);

  // sets variable amount to the value we have input
  let amount = parseFloat(document.querySelector("#amount").value);
  console.log(amount);
  //   sets variable total to the integer found in the selected category
  let total = parseFloat(document.querySelector(`.${category}`).textContent);
  console.log(total);
  //   sets variable balance equal to total + amount
  let balance = total + amount;
  console.log(balance);
  //   puts balance into proper td in table
  document.querySelector(`.${category}`).textContent = `$${balance}`;

  //   let budget = document.querySelector("#budget").value;
  //   let total = parseInt(document.querySelector(".total").textContent);
  //   let balance = budget - total;
  //   document.querySelector(".total").textContent = `$${total}`;

  itemDescriptionForm.reset();
});
