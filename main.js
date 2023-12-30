"use strict";
import { init } from "./constants";
import { Todo, TaskManager, DomUpdater } from "./classes";
import { createTodo, createDivs } from "./helpers";
// import { createTodo } from "./helpers";

const { addBtn, input, tasks } = init();
const taskManager = new TaskManager();
const domUpd = new DomUpdater()

let todoInputText = ''

input.addEventListener('input', function(){
  todoInputText = input.value
})
// addBtn.addEventListener("click", function () {
//   createTodo(tasks, Todo, taskManager, DomUpdater)
// });

addBtn.addEventListener("click", function () {
  if(input.value !== ''){
    const todoToAdd = new Todo(input.value)
    console.log(todoToAdd);
    taskManager.createTodo(todoToAdd)
    console.log(taskManager.taskArr); 
    input.value = ''
   const divs = createDivs(todoToAdd, taskManager, domUpd )
   console.log(divs);
   console.log(divs.returnTaskDiv());
   console.log(divs.returnTaskInputDiv());
     domUpd.showTodo(tasks, divs.returnTaskDiv(), divs.returnTaskInputDiv())
  }
  
});

// input.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     createTodo(tasks, Todo, taskManager, DomUpdater)
//   }
// });
