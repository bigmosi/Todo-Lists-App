/**
 * @jest-environment jsdom
 */

import TaskStore from '../taskStore.js';

const taskstore = new TaskStore();
document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

describe('edit method test', () => {
  test('edit task', () => {
    taskstore.addTask('play football');
    taskstore.addTask('watch movies');

    const list = document.querySelectorAll('.todo-list li');

    expect(list).toHaveLength(2);

    taskstore.editTask({ id: 1, data: 'play chess' });
    const taskOne = document.querySelectorAll('.todo-list li input[type=text]')[0].value;

    taskstore.editTask({ id: 2, data: 'go shopping' });
    const taskTwo = document.querySelectorAll('.todo-list li input[type=text]')[1].value;

    expect(taskOne).toBe('play chess');
    expect(taskTwo).toBe('go shopping');
  });
});
