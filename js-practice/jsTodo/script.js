// select Dom elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-btn");
const list = document.getElementById("todo-list");

// try to load saved todos from localstorage (if any)
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
  // save current todos array to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// create a dom node for a todo object and append it to the list
function createTodoNode(todo, index) {
  const li = document.createElement("li");

  // checkbox to toggle complition
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = !!todo.completed;
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;

    // visual feedback: strike-through when completed
    saveTodos();
  });
  // text of todo
  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.margin = "0 8px";
  if (todo.completed) {
    textSpan.style.textDecoration = "line-through";

    // add double-click eventlistener
    textSpan.addEventListener("dblclick", () => {
      const newText = prompt("edit todo", todo.text);
      if (newText !== null) {
        todo.text = newText.trim();
        textSpan.textContent = todo.text;
        saveTodos();
      }
    });
    // delete todo button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      render();
      saveTodos();
    });
    li.appendChild(checkbox);
    li.appendChild();
  }
}

// render the whole todo list from todos array
function render() {
  list.innerHTML = "";

  // recreate each item
  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}
