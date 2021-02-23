const button = document.querySelector('.submit');
button.addEventListener('click', addTodo);
const input = document.querySelector('.new-todo')

if (input.keyCode === 13) {
    input.addEventListener('keyup', addTodo);
}



function addTodo() {
    const todo = document.querySelector('.new-todo').value;
    if (todo === '') {
        alert("Please enter a todo");
    } else {
        const newEl = document.createElement('li');
        const newListItem = document.createTextNode(todo);
        var icon = document.createElement('i');
        icon.classList.add('fa', 'fa-trash-o', 'de');
        newEl.appendChild(newListItem);
        newEl.appendChild(icon);
        const currentDiv = document.querySelector('.list');
        currentDiv.insertBefore(newEl, currentDiv.childNodes[0]);
        document.querySelector('.new-todo').value = '';
        icon.addEventListener('click', deleteTodo);
    }
    input.focus();
}

function deleteTodo() {

    this.parentNode.parentNode.removeChild(this.parentNode);
}