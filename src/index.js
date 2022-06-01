import './index.css';

const todos = [
  {
    index: 1,
    description: 'Buy food stuff',
    completed: false
  },
  {
    index: 2,
    description: 'Complete all microverse activity',
    completed: false,
    },
    {
     index: 3,
     description: 'Watch Tv program',
      completed: false,
    },
    {
     index: 4,
     description: 'Eat super',
     completed: false,
    }
];

const todoList = () => {
    const list = document.querySelector('.todo-list');

    todos.forEach((todo) => {
        list.innerHTML += `
        <div class="main-container">        
        <div class="list-item">
        <input type='checkbox' class="checkbox" id=${todo.index} />
        <input type='text' class='desc font-normal px-1' value='${todo.description}' disabled/>
        <span class='fa fa-ellipsis-v fa-lg'></span>
        </div>
       </div> 
        `;
    });
}

todoList();
