"use strict";
import { DomUpdater } from "./classes";
 const createDiv = (obj, parent, arr, domUpd) => {
  const domUpdate = new DomUpdater()
  domUpdate.addClass(domUpdate.taskDiv, 'taskDiv')
  domUpdate.addClass(domUpdate.taskRemoveBtn, 'taskRemoveBtn')
  domUpdate.addClass(domUpdate.taskEditBtn, 'taskEditBtn')
  domUpdate.addClass(domUpdate.taskInputDiv, 'taskInputDiv', 'hidden')
  domUpdate.addClass(domUpdate.taskInput, 'taskInput')
  domUpdate.addClass(domUpdate.taskInputBtn, 'taskInputBtn')

  domUpdate.addTextContent(domUpdate.taskEditBtn, 'Edit')
  domUpdate.addTextContent(domUpdate.taskRemoveBtn, 'X')
  domUpdate.addTextContent(domUpdate.taskInputBtn, 'Done')

  domUpdate.appendEl(domUpdate.taskInputDiv, domUpdate.taskInput, domUpdate.taskInputBtn)
  domUpdate.addTextContent(domUpdate.taskDiv, obj.text)
  domUpdate.appendEl(domUpdate.taskDiv, domUpdate.taskEditBtn, domUpdate.taskRemoveBtn)
  
  parent.append(domUpdate.returnEl(domUpdate.taskDiv), domUpdate.returnEl(domUpdate.taskInputDiv));

  btnRemoveEvent(domUpdate.taskRemoveBtn, obj, domUpdate.taskDiv, arr);
  btnEditEvent(domUpdate.taskEditBtn, obj, domUpdate.taskDiv, domUpdate.taskInputDiv);
};

const btnRemoveEvent = (btn, el, div, arr) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
    arr.splice(el.index, 1);
  });
};

const btnEditEvent = (btn, el, div, input) => {
  btn.addEventListener("click", function () {
    console.log(el);
///////////////////////////////////////////////////////
    el.editTask(div, input);
    const divText = el.text;
    const realDivText = divText.replace("EditX", "");
    input.firstChild.value = realDivText;
    console.log(el);
    btnDoneEvent(input.lastChild, el, div, input);
  });

  const btnDoneEvent = (btn, el, div, input) => {
    btn.addEventListener("click", function () {
      const inputFirstChild = input.firstChild;
      const inputText = inputFirstChild.value;
      div.textContent = inputText;
      el.setText(inputText);
      el.editTask(input, div);
    });
  };
};

export const createTodo = (o, todo, taskMan) => {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new todo(inputText);
    createDiv(task, o, taskMan.taskArr);
    input.value = "";
    taskMan.taskArr.push(task);
  }
}