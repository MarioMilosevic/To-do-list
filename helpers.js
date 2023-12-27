"use strict";

export const createDiv = (obj, parent, arr) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = obj.text;
  taskDiv.classList.add("taskDiv");
  const taskRemoveBtn = document.createElement("button");
  taskRemoveBtn.classList.add("taskRemoveBtn");
  taskRemoveBtn.textContent = "X";
  const taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("taskEditBtn");
  taskEditBtn.textContent = "Edit";
  taskDiv.appendChild(taskRemoveBtn);
  taskDiv.appendChild(taskEditBtn);
  parent.appendChild(taskDiv);

  btnEvent(taskRemoveBtn, obj, taskDiv, arr);
};

const btnEvent = (btn, el, div, arr) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
    arr.splice(el.index, 1);
  });
};
