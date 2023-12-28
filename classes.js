"use strict";

export class Todo {
  constructor(text) {
    this.text = text;
  }

  updateText(value) {
    return (this.text += value);
  }

  setText(value) {
    return (this.text = value);
  }

  removeTask(el) {
    el.remove();
  }
  editTask(a, b) {
    a.classList.add("hidden");
    b.classList.remove("hidden");
  }
}

export class TaskManager {
  constructor() {
    this.taskArr = [];
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
    return el
  }
  addTextContent(el, content) {
    el.textContent = content;
    return el
  }
  returnEl(el) {
    return el;
  }

  appendEl(a, b, c) {
    a.append(b, c);
    return a
  }

 
}

const mario = new DomUpdater()
console.log(mario)
console.log(mario.addClass(mario.taskDiv, 'taskDiv'))
console.log(mario.taskDiv)

 // this.taskInputDiv.append(this.taskInput, this.taskInputBtn);
  //   taskDiv.textContent = obj.text;
  //   taskDiv.append(taskEditBtn, taskRemoveBtn);
  //   parent.append(taskDiv, taskInputDiv);