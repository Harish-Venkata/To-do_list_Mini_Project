let inputText = document.getElementById("input");
let addBtn = document.getElementById("add");
let cart = document.getElementById("list-container");

addBtn.addEventListener("click", function () {
  let lists = document.createElement("li");
  lists.textContent = inputText.value;
  cart.appendChild(lists);
  inputText.value = " ";
  lists.style.listStyleType = "none";
});

cart.addEventListener("click", function (e) {
  e.target.remove();
});
