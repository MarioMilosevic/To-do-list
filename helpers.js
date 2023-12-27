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
  const taskInput = document.createElement('input')
  taskInput.classList.add('taskInput', 'hidden')
  taskDiv.textContent = obj.text;
  taskDiv.append(taskEditBtn, taskRemoveBtn, taskInput)
  // taskDiv.appendChild(taskEditBtn);
  // taskDiv.appendChild(taskRemoveBtn);
  parent.append(taskDiv);

  btnRemoveEvent(taskRemoveBtn, obj, taskDiv, arr);
  btnEditEvent(taskEditBtn, obj, taskDiv);
};
// sakrijem div, napravim input sa istom klasom i asignujem joj ovaj textContent pa nakon zavrsetka editovanja vratim div a proslijedim mu textContent iz inputa a sakrijem input
const btnRemoveEvent = (btn, el, div, arr) => {
  btn.addEventListener("click", function () {
    el.removeTask(div);
    arr.splice(el.index, 1);
  });
};

const btnEditEvent = (btn, el, div) => {
  btn.addEventListener("click", function () {
    // el.editTask(div)
    // div.focus()
    console.log('div', div);
    console.log('');
  });
};

const editTask = (task, div) => {

}