"use strict";

export function init() {
  const taskArr = [];
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");
  const tasks = document.querySelector(".tasks");
  return {
    input,
    btn,
    tasks,
    taskArr,
  };
}

export class TaskCreator {
  constructor(text) {
    this.text = text;
  }
  removeTask(el) {
    el.remove();
  }
  editTask(div, inputDiv) {
    div.classList.add("hidden");
    inputDiv.classList.remove("hidden");
  }
}
