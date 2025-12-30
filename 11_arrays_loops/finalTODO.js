const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
},{
  name: 'watch korean movies',
  dueDate: '2023-1-18'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  // looping through an array
  for(let i = 0; i<todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject; // destructuring

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
// here we want todo , duedate and delete button on separate columns therefore we have used div for each ...previously we were using a single <p> for 1 todo entry
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    // short hand property
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}
