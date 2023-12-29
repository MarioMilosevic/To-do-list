"use strict";

export class Todo {
  constructor(text) {
    this.text = text;
    this.isEditing = false;
    this.id = Math.floor(Math.random() * 100000);
  }
  updateText(value) {
    return (this.text += value);
  }

  setText(value) {
    return (this.text = value);
  }

  updateIsEditing(value) {
    return (this.isEditing += value);
  }

  setIsEditing(value) {
    return (this.isEditing = value);
  }

  returnIsEditing() {
    return this.isEditing;
  }
}

export class TaskManager {
  constructor() {
    this.taskArr = [];
    this.removedTasks = [];
  }

  createTodo(todo) {
    this.taskArr.push(todo);
  }

  showRemovedTasks() {
    return this.removedTasks;
  }

  getArr() {
    return this.taskArr;
  }

  editTask(todo, value) {
    todo.textContent += value;
  }

  removeTask(todo) {
    // if(todo.id = )
    // // this.removedTasks.push(...this.taskArr.splice(todo.index, 1))
    // const removedTask = this.taskArr.splice(this.taskArr[todo], 1)
    // const index = this.taskArr[todo]
    // return {
    //   removedTask, index
    // }
    // return this.taskArr.splice(todo.index, 1)
  }
}

export class DomUpdater {
  constructor() {
    this.taskDiv = document.createElement("div");
    this.taskRemoveBtn = document.createElement("button");
    this.taskEditBtn = document.createElement("button");
    this.taskInputDiv = document.createElement("div");
    this.taskInput = document.createElement("input");
    this.taskInputBtn = document.createElement("button");
  }

  addClass(el, ...cl) {
    el.classList.add(...cl);
    return el;
  }

  removeFn(todo, arr) {
    const filterArr = arr.filter((_, index) => index !== todo.index);
    return filterArr;
  }

  addTextContent(el, content) {
    el.textContent = content;
    return el;
  }

  returnTextContent(el) {
    return el.textContent;
  }

  returnEl(el) {
    return el;
  }

  updateTask(a, b) {
    a.classList.add("hidden");
    b.classList.remove("hidden");
  }

  appendEl(a, b, c) {
    a.append(b, c);
    return a;
  }
}
