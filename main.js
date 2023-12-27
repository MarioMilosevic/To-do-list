"use strict";
import { init } from "./constants";
import { createDiv } from "./helpers";
const { btn, input, tasks, taskArr } = init();

class TaskCreator {
  constructor(text) {
    this.text = text;
  }
  removeTask(el) {
    el.remove();
  }
  editTask(el){
    el.setAttribute('contentEditable', true)
  }
}

btn.addEventListener("click", function () {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new TaskCreator(inputText);
    createDiv(task, tasks, taskArr);
    input.value = "";
    taskArr.push(task);
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let inputText = input.value;
    if (inputText !== "") {
      const task = new TaskCreator(inputText);
      createDiv(task, tasks, taskArr);
      input.value = "";
      taskArr.push(task);
    }
  }
});
