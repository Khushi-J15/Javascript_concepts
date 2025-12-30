const todoList = ['make-dinner', 'wash-clothes'];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  // looping through an array
  for(let i = 0; i<todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}
