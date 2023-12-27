"use strict";
import { init, TaskCreator } from "./constants";
import { createDiv } from "./helpers";
const { btn, input, tasks, taskArr } = init();



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
