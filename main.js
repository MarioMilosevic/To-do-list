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
  const task = new TaskCreator(inputText);
  console.log(task);
  createDiv(inputText)
});

const createDiv = (text) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = text
  const taskBtn = document.createElement("button");
  taskDiv.classList.add("taskDiv");
  taskBtn.classList.add("taskBtn");
  taskBtn.textContent = "X";
  taskDiv.appendChild(taskBtn);
  tasks.appendChild(taskDiv);
};

// createDiv();
// createDiv();
