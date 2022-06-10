/**
 * @jest-environment jsdom
 */

import TaskStore from '../taskStore.js';

const taskstore = new TaskStore();
describe('Todo list addItem tests', () => {
  document.body.innerHTML = '<div><ul class="todo-list"></ul></div>';

  test('add Item I', () => {
    taskstore.addTask('play football');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });

  test('add Item II', () => {
    taskstore.addTask('play tennis');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });

  test('add Item III', () => {
    taskstore.addTask('Watch fally ipupa concert');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
});

describe('Todo list removeItem tests', () => {
  test('remove Item III', () => {
    taskstore.removeTask(false, 3);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('remove Item I', () => {
    taskstore.removeTask(false, 1);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('remove remaining Item', () => {
    taskstore.removeTask(false, 1);
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});

describe('set completed status', () => {
  test('test mark completed', () => {
    taskstore.setTaskStaus(0);
    taskstore.setTaskStaus(1);
    taskstore.printTodoList();
    const statusOne = document.querySelectorAll('.todo-list li input[type=checkbox]')[0].checked;
    const statusTwo = document.querySelectorAll('.todo-list li input[type=checkbox]')[1].checked;
    expect(statusOne).toBe(true);
    expect(statusTwo).toBe(true);
  });
});
describe('clear completed tasks', () => {
  test('clear all todos', () => {
    taskstore.removeTask(true, -1);
    let list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
    taskstore.addTask('go swimming');
    taskstore.addTask('go hiking');
    taskstore.addTask('prepare dinner');
    taskstore.setTaskStaus(0);
    taskstore.setTaskStaus(1);
    taskstore.setTaskStaus(2);
    taskstore.removeTask(true, -1);
    list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
});