"use strict";
import { init } from "./constants";
import { Todo, TaskManager, DomUpdater } from "./classes";
// import { createTodo } from "./helpers";

const { addBtn, input, tasks } = init();
const taskManager = new TaskManager();
const domUpd = new DomUpdater()
let todoInputText = ''

input.addEventListener('input', function(e){
  todoInputText += e.target.value
})
// addBtn.addEventListener("click", function () {
//   createTodo(tasks, Todo, taskManager, DomUpdater)
// });

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    createTodo(tasks, Todo, taskManager, DomUpdater)
  }
});


addBtn.addEventListener("click", function () {

  const todoToAdd = new Todo(todoInputText)

  taskManager.createTodo(todoToAdd)
  console.log(taskManager.taskArr); 
  todoInputText = ''
  // domUpd.showTodo()
});