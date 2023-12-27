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
}

btn.addEventListener("click", function () {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new TaskCreator(inputText);
    createDiv(task, tasks);
    input.value = "";
    taskArr.push(task)
    console.log(taskArr);
  } else {
    return;
  }
});
