"use strict";

const budgetForm = document.querySelector(".budget-form");
const remainingBalance = document.querySelector(".balance");
const itemDescriptionForm = document.querySelector(".item-description-form");
const itemTableBody = document.querySelector(".item-table-body");
const items = [];
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");

document.querySelector(".total").textContent = "$0";
document.querySelector(".Bills").textContent = "$0";
document.querySelector(".Clothing").textContent = "$0";
document.querySelector(".Entertainment").textContent = "$0";
document.querySelector(".Food").textContent = "$0";

const updateBalance = () => {
  let budget = document.querySelector("#budget").value;
  document.querySelector(".total").textContent = document
    .querySelector(".total")
    .textContent.slice(1);
  let total = parseFloat(document.querySelector(".total").textContent);
  let balance = budget - total;
  document.querySelector(".total").textContent = `$${total}`;
  document.querySelector(".total").textContent = `$${total}`;
  remainingBalance.textContent = `$${balance}`;
};
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateBalance();
});

const calculateTotal = () => {
  for (let i = 0; i < 5; i++) {
    let td = 0;
    if (i === 0) {
      td = ".total";
    } else if (i === 1) {
      td = ".Bills";
    } else if (i === 2) {
      td = ".Clothing";
    } else if (i === 3) {
      td = ".Entertainment";
    } else {
      td = ".Food";
    }
    document.querySelector(td).textContent = document
      .querySelector(td)
      .textContent.slice(1);
  }

  document.querySelector(".total").textContent =
    parseFloat(document.querySelector(".Bills").textContent) +
    parseFloat(document.querySelector(".Clothing").textContent) +
    parseFloat(document.querySelector(".Entertainment").textContent) +
    parseFloat(document.querySelector(".Food").textContent);

  for (let i = 0; i < 5; i++) {
    let amount = 0;
    let td = 0;
    if (i === 0) {
      amount = document.querySelector(".total").textContent;
      td = ".total";
    } else if (i === 1) {
      amount = document.querySelector(".Bills").textContent;
      td = ".Bills";
    } else if (i === 2) {
      amount = document.querySelector(".Clothing").textContent;
      td = ".Clothing";
    } else if (i === 3) {
      amount = document.querySelector(".Entertainment").textContent;
      td = ".Entertainment";
    } else {
      amount = document.querySelector(".Food").textContent;
      td = ".Food";
    }
    document.querySelector(td).textContent = `$${amount}`;
  }
};

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
      button.classList.add("delete");
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
  //   sets variable total to the integer found in the selected category
  let total = parseFloat(document.querySelector(`.${category}`).textContent);
  //   sets variable balance equal to total + amount
  let balance = total + amount;
  //   puts balance into proper td in table
  document.querySelector(`.${category}`).textContent = `$${balance}`;
  calculateTotal();
  updateBalance();
  itemDescriptionForm.reset();
});

itemTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let category = e.target.parentNode.parentNode.childNodes[1].textContent;
    let amount = parseFloat(
      e.target.parentNode.parentNode.childNodes[2].textContent.slice(1)
    );
    let newCategoryTotal = parseFloat(
      document.querySelector(`.${category}`).textContent.slice(1)
    );
    newCategoryTotal -= amount;
    document.querySelector(`.${category}`).textContent = `$${newCategoryTotal}`;
    e.target.parentNode.parentNode.remove();
    calculateTotal();
    updateBalance();
  }
});
