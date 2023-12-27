"use strict";

export const createDiv = (obj, parent, arr) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("taskDiv");

  const taskRemoveBtn = document.createElement("button");
  taskRemoveBtn.classList.add("taskRemoveBtn");
  taskRemoveBtn.textContent = "X";

  const taskEditBtn = document.createElement("button");
  taskEditBtn.classList.add("taskEditBtn");
  taskEditBtn.textContent = "Edit";

  const taskInputDiv = document.createElement("div");
  taskInputDiv.classList.add("taskInputDiv", "hidden");

  const taskInput = document.createElement("input");
  taskInput.classList.add("taskInput");

  const taskInputBtn = document.createElement("button");
  taskInputBtn.classList.add("taskInputBtn");
  taskInputBtn.textContent = "Done";
  taskInputDiv.append(taskInput, taskInputBtn);

  taskInputDiv.append(taskInput, taskInputBtn);

  taskDiv.textContent = obj.text;
  taskDiv.append(taskEditBtn, taskRemoveBtn);
  parent.append(taskDiv, taskInputDiv);

  btnRemoveEvent(taskRemoveBtn, obj, taskDiv, arr);
  btnEditEvent(taskEditBtn, obj, taskDiv, taskInputDiv);
};

const btnRemoveEvent = (btn, el, div, arr) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
    arr.splice(el.index, 1);
  });
};

const btnEditEvent = (btn, el, div, input) => {
  btn.addEventListener("click", function () {
    el.editTask(div, input);
    const divText = el.text
    const realDivText = divText.replace("EditX", "");
    input.firstChild.value = realDivText;
    console.log(el);
    btnDoneEvent(input.lastChild, el, div, input);
  });

  const btnDoneEvent = (btn, el, div, input) => {
    btn.addEventListener("click", function () {
      const inputFirstChild = input.firstChild;
      const inputText = inputFirstChild.value
      div.textContent = inputText
      el.setText(inputText)
      el.editTask(input, div);
    });
  };
};
