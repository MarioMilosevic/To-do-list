"use strict";

export const createDiv = (obj, parent, arr) => {
  const taskDiv = document.createElement("div");
  taskDiv.textContent = obj.text;
  const taskBtn = document.createElement("button");
  taskDiv.classList.add("taskDiv");
  taskBtn.classList.add("taskBtn");
  taskBtn.textContent = 'X';
  taskDiv.appendChild(taskBtn);
  parent.appendChild(taskDiv);

  btnEvent(taskBtn, obj, taskDiv, arr);
};

const btnEvent = (btn, el, div, arr) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
    arr.splice(el.index, 1)
    console.log('posle micanja',arr);
  });
};
