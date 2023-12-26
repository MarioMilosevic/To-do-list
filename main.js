"use strict";
import { init } from "./constants";

const { btn, input, tasks } = init();

class TaskCreator {
  constructor(text) {
    this.text = text;
  }
}

btn.addEventListener("click", function () {
  let inputText = input.value;
  console.log(inputText);
  const task = new TaskCreator(inputText);
  console.log(task);
});


const createDiv = () => {
  const taskDiv = document.createElement("div");
  const taskBtn = document.createElement("button");
  taskDiv.classList.add("taskDiv");
  taskBtn.classList.add("taskBtn"); 
  taskDiv.appendChild(taskBtn);
  tasks.appendChild(taskDiv);
};

createDiv();
createDiv();
