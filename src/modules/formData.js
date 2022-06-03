const form = document.forms[0];
const addContent = form.elements.todo;
const returnIcon = document.querySelector('.fa-level-down');
const clearTodo = document.querySelector('.clear');
const refreshTask = document.querySelector('.fa-refresh');

const addBookHandler = ({ taskstore }) => {
  if (addContent.value !== '') {
    taskstore.addTask(addContent.value);
    taskstore.printTodoList();
    form.reset();
  }
};

const removeBookHandler = ({ taskstore }) => {
  taskstore.removeTask(true);
};

export {
  addContent, clearTodo, returnIcon, addBookHandler, removeBookHandler, refreshTask,
};
