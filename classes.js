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

  removeTodo(todo) {
    const filteredArr = this.taskArr.filter((t) => t.id !== todo.id);
    return filteredArr;
  }

  showRemovedTasks() {
    return this.removedTasks;
  }

  setArr(arr) {
    this.taskArr = arr;
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
  constructor() {}

  addClass(el, ...cl) {
    el.classList.add(...cl);
    return el;
  }

  showTodo(todoParent, a, b) {
    todoParent.append(a, b);
    return todoParent
  }

  // createDiv(todoToAdd, tasks, taskManager, domUpd )

  // export const createDiv = (todo, todoParent, taskMan, domUpd) => {
  //   const domUpdate = domUpd
  //   const taskDiv = document.createElement("div");
  //   const taskDivParagraph = document.createElement("p");
  //   const taskRemoveBtn = document.createElement("button");
  //   const taskEditBtn = document.createElement("button");
  //   const taskInputDiv = document.createElement("div");
  //   const taskInput = document.createElement("input");
  //   const taskInputBtn = document.createElement("button");
  //   domUpdate.addClass(taskDiv, "taskDiv");
  //   domUpdate.addClass(taskDivParagraph, 'taskDivParagraph')
  //   domUpdate.addClass(taskRemoveBtn, "taskRemoveBtn");
  //   domUpdate.addClass(taskEditBtn, "taskEditBtn");
  //   domUpdate.addClass(taskInputDiv, "taskInputDiv", "hidden");
  //   domUpdate.addClass(taskInput, "taskInput");
  //   domUpdate.addClass(taskInputBtn, "taskInputBtn");

  //   domUpdate.addTextContent(taskEditBtn, "Edit");
  //   domUpdate.addTextContent(taskRemoveBtn, "X");
  //   domUpdate.addTextContent(taskInputBtn, "Done");

  //   domUpdate.appendEl(taskInputDiv, taskInput, taskInputBtn);
  //   domUpdate.addTextContent(taskDivParagraph, todo.text);
  //   domUpdate.appendEl(taskDiv,taskDivParagraph ,taskEditBtn, taskRemoveBtn);

  //   todoParent.append(
  //     domUpdate.returnEl(taskDiv),
  //     domUpdate.returnEl(taskInputDiv)
  //   );

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

  appendEl(a, ...restParams) {
    a.append(...restParams);
    return a;
  }
}
