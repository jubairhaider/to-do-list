var todoList = document.querySelector("#list ul");
todoList.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement.parentElement;
    todoList.removeChild(li);
  }
});
const form = document.querySelector("#add-todo");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const name = document.createElement("span");
  const deleteBtn = document.createElement("span");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "input");
  name.textContent = " " + value;
  deleteBtn.textContent = "Delete";
  name.setAttribute("class", "name");
  deleteBtn.setAttribute("class", "delete");
  li.setAttribute("class", "list-item");
  label.appendChild(name);
  label.appendChild(deleteBtn);
  li.appendChild(input);
  li.appendChild(label);
  todoList.appendChild(li);
  form.reset();
});
//check your todo

todoList.addEventListener("click", (e) => {
  if (e.target.className == "input") {
    const li = e.target.parentElement;
    li.style.display = "none";
  }
});
