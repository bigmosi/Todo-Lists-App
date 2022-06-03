import TaskStore from './modules/taskStore.js';
import {
  returnIcon, addContent, clearTodo, addBookHandler, removeBookHandler,
} from './modules/formData.js';
import './index.css';

const taskstore = new TaskStore();

window.addEventListener('load', () => {
  taskstore.printTodoList();
  addContent.focus();
});

returnIcon.addEventListener('click', () => {
  addBookHandler({ taskstore });
});

clearTodo.addEventListener('click', () => {
  removeBookHandler({ taskstore });
});

addContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && event.target.value !== '') {
    event.preventDefault();
    addBookHandler({ taskstore });
  }
});
