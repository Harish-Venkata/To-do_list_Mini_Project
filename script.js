let inputText = document.getElementById("input");
let addBtn = document.getElementById("add");
let cart = document.getElementById("list-container");

addBtn.addEventListener("click", function () {
  let lists = document.createElement("li");
  lists.textContent = inputText.value;
  cart.appendChild(lists);
  inputText.value = " ";
  lists.style.listStyleType = "none";
  localStorage.setItem("localData", cart.innerHTML);
});

const savedContent = localStorage.getItem("localData");
cart.innerHTML = savedContent;
// Added localStorage Content

cart.addEventListener("click", function (e) {
  e.target.remove();
});

const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data) {
      let hello = document.createElement("p");
      hello.innerText = data.title;
      cart.appendChild(hello);
    } else {
      console.log(error);
    }
  })
  .catch((err) => {
    console.log(err);
  });
