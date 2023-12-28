"use strict";

export class Todo {
  constructor(text) {
    this.text = text;
    this.isEditing = false;
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

  getArr(){
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

  removeFn(todo, arr){
   arr.filter(todo => todo !== todo.index)
   return arr
  }

  addTextContent(el, content) {
    el.textContent = content;
    return el;
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
