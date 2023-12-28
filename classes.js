"use strict";

export class Todo {
  constructor(text) {
    this.text = text;
  }
}

export class TaskManager {
  constructor() {
    this.taskArr = [];
  }

  add(todo){
    this.taskArr.push(todo)
    return this.taskArr
  }

  remove(todo){
    this.taskArr.splice(todo.index)
    return this.taskArr
  }

  removeTask(todo) {
    return this.taskArr.splice(todo.index, 1)
  }

  updateText(value) {
    return (this.text += value);
  }

  setText(value) {
    return (this.text = value);
  }

  removeTask(todo) {
    return this.taskArr.splice(todo.index, 1)
  }
  editTask(a, b) {
    a.classList.add("hidden");
    b.classList.remove("hidden");
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
  addTextContent(el, content) {
    el.textContent = content;
    return el;
  }
  returnEl(el) {
    return el;
  }

  appendEl(a, b, c) {
    a.append(b, c);
    return a;
  }
}
