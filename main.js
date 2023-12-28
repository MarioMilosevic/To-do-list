"use strict";
import { init } from "./constants";
import { Todo } from "./classes";
import { createDiv } from "./helpers";
const { btn, input, tasks, taskArr } = init();



btn.addEventListener("click", function () {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new Todo(inputText);
    createDiv(task, tasks, taskArr);
    input.value = "";
    taskArr.push(task);
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let inputText = input.value;
    if (inputText !== "") {
      const task = new Todo(inputText);
      createDiv(task, tasks, taskArr);
      input.value = "";
      taskArr.push(task);
    }
  }
});