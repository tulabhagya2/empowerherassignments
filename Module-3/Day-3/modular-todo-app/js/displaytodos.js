export function displayTodos(todos) {
    const container = document.getElementById('todosContainer');
    container.innerHTML = '';
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        div.style.margin = '5px';
        div.style.padding = '5px';
        div.textContent = `${todo.id}. ${todo.title} - ${todo.completed ? '✅' : '❌'}`;
        container.appendChild(div);
    });
}
