/**
 * @jest-environment jsdom
 */

import TaskStore from '../taskStore.js';

describe('Todo list addItem tests', () => {
  const taskstore = new TaskStore();
  document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

  test('add Item I', () => {
    taskstore.addTask('play football');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });

});