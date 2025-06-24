let todoList = [];

document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  document.getElementById("title-error").innerText = "";
  document.getElementById("description-error").innerText = "";

  if (title === "") {
    document.getElementById("title-error").innerText =
      "Please fill out this field.";
    return;
  }

  if (description === "") {
    document.getElementById("description-error").innerText =
      "Please fill out this field.";
    return;
  }

  todoList.push({ title, description });

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  renderTodoList();
});

function renderTodoList() {
  const listBody = document.getElementById("todo-list-body");
  listBody.innerHTML = "";

  todoList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "todo-card";

    const titleEl = document.createElement("div");
    titleEl.className = "todo-title";
    titleEl.innerText = item.title;

    const descEl = document.createElement("div");
    descEl.className = "todo-description";
    descEl.innerText = item.description;

    const deleteEl = document.createElement("div");
    deleteEl.className = "todo-delete";

    const delBtn = document.createElement("button");
    delBtn.innerText = "✖";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => {
      todoList.splice(index, 1);
      renderTodoList();
    };

    deleteEl.appendChild(delBtn);

    card.appendChild(titleEl);
    card.appendChild(descEl);
    card.appendChild(deleteEl);

    listBody.appendChild(card);
  });
}
