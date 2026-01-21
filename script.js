const body = document.body
const switchBtn = document.getElementById('switch-mode')
const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const todoListContainer = document.getElementById('todo-list')

let sortOrder = 'asc';

let todos = [
    { id: 1, text: "Aku belajar javascript" },
    { id: 2, text: "Aku sudah makan" }
]

switchBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    const isDarkMode = body.classList.contains("dark-mode")

    if (isDarkMode) {
        switchBtn.innerText = "Light Mode"
    } else {
        switchBtn.innerText = "Dark Mode"
    }
})

function renderTodoList() {
    todoListContainer.innerHTML = ""

    const filteredTodos = todos
        .filter(item => item.id)
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });

    const todoElement = filteredTodos.map((item, index) => {
        const li = document.createElement("li")
        const span = document.createElement("span")
        const deleteBtn = document.createElement("button")
        const sortBtn = document.getElementById("sort-btn")
        const delay = index * 0.1;

        span.textContent = `${item.id}. ${item.text}`
        deleteBtn.textContent = "Delete"
        deleteBtn.classList.add("btn", "btn-error")

        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1)
            renderTodoList()
        })

        sortBtn.addEventListener("click", () => {
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            sortBtn.textContent = sortOrder === 'asc' ? 'Sort Asc' : 'Sort Desc';
            renderTodoList();
        });


        li.classList.add("todo-item")

        li.style.animationDelay = `${delay}s`

        li.appendChild(span);
        li.appendChild(deleteBtn);

        return li;
    });

    todoListContainer.append(...todoElement);
}

renderTodoList();

addBtn.addEventListener("click", () => {
    const newText = todoInput.value.trim();

    if (newText === "") {
        alert("Masukkan kegiatan!");
        return;
    }

    const newData = {
        id: todos.length + 1,
        text: newText
    }

    todos.push(newData);

    todoInput.value = "";

    renderTodoList();
});