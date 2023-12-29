"use strict";
import { init } from "./constants";
import { Todo, TaskManager, DomUpdater } from "./classes";
import { createTodo } from "./helpers";

const { addBtn, input, tasks } = init();
const taskManager = new TaskManager();

addBtn.addEventListener("click", function () {
  createTodo(tasks, Todo, taskManager, DomUpdater)
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTodo(tasks, Todo, taskManager, DomUpdater)
  }
});
