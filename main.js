"use strict";
import { init } from "./constants";
import { Todo, TaskManager } from "./classes";
import { createDiv, createTodo } from "./helpers";
const { btn, input, tasks } = init();
const taskManager = new TaskManager();

btn.addEventListener("click", function () {
  createTodo(tasks, Todo, taskManager)
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTodo(tasks, Todo, taskManager)
  }
});
