"use strict";
import { init } from "./constants";
import { Todo, TaskManager, DomUpdater } from "./classes";
import { createDivs } from "./helpers";

const { addBtn, input, tasks } = init();
const taskManager = new TaskManager();
const domUpd = new DomUpdater();

addBtn.addEventListener("click", function () {
  if (input.value !== "") {
    const todoToAdd = new Todo(input.value);
    taskManager.createTodo(todoToAdd);
    input.value = "";
    const divs = createDivs(todoToAdd, taskManager, domUpd);
    domUpd.showTodo(tasks, divs.taskDiv, divs.taskInputDiv);
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value !== "") {
      const todoToAdd = new Todo(input.value);
      taskManager.createTodo(todoToAdd);
      input.value = "";
      const divs = createDivs(todoToAdd, taskManager, domUpd);
      domUpd.appendEl(tasks, divs.taskDiv, divs.taskInputDiv);
    }
  }
});
