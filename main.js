"use strict";
import { init } from "./constants";
import { Todo, TaskManager, DomUpdater } from "./classes";
import { createTodo } from "./helpers";
const { btn, input, tasks } = init();
const taskManager = new TaskManager();

btn.addEventListener("click", function () {
  createTodo(tasks, Todo, taskManager, DomUpdater)
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTodo(tasks, Todo, taskManager, DomUpdater)
  }
});
