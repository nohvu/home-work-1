document.addEventListener("DOMContentLoaded", render);

let tasks = ["Я хочу сделать список задач"];
let ul = document.querySelector("ul");

const addBtn = document.querySelector(".buttonAdd");
addBtn.addEventListener("click", handleClickAdd);

function handleClickAdd(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  input.value.trim() && tasks.push(input.value);
  render();
  console.log(tasks);
  input.value = "";
}

function handleClickRemove(index) {
  tasks.splice(index, 1);
  render();
}

function render() {
  ul.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.style.cssText = "font-size: 20px; margin-bottom: 15px; overflow-wrap"; // Стили добавил для приятного отображения.
    li.innerText = task;
    let removeBtn = document.createElement("button");
    removeBtn.style.cssText = "margin-left: 10px";
    removeBtn.setAttribute("index", index);
    removeBtn.innerText = "X";
    li.appendChild(removeBtn);
    ul.appendChild(li);
    removeBtn.onclick = () => {
      handleClickRemove(removeBtn.getAttribute("index"));
    };
  });
}
