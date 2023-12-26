"use strict";

export const createDiv = (obj, parent) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = obj.text;
  const taskBtn = document.createElement("button");
  taskDiv.classList.add("taskDiv");
  taskBtn.classList.add("taskBtn");
  taskBtn.textContent = 'X';
  taskDiv.appendChild(taskBtn);
  parent.appendChild(taskDiv);

  btnEvent(taskBtn, obj, taskDiv);
};

const btnEvent = (btn, el, div) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
  });
};
