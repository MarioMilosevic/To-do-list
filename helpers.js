"use strict";
export const createDivs = (todo, taskMan, domUpd) => {
  const domUpdate = domUpd;
  const taskDiv = document.createElement("div");
  const taskDivParagraph = document.createElement("p");
  const taskRemoveBtn = document.createElement("button");
  const taskEditBtn = document.createElement("button");
  const taskInputDiv = document.createElement("div");
  const taskInput = document.createElement("input");
  const taskInputBtn = document.createElement("button");
  domUpdate.addClass(taskDiv, "taskDiv");
  domUpdate.addClass(taskDivParagraph, "taskDivParagraph");
  domUpdate.addClass(taskRemoveBtn, "taskRemoveBtn");
  domUpdate.addClass(taskEditBtn, "taskEditBtn");
  domUpdate.addClass(taskInputDiv, "taskInputDiv", "hidden");
  domUpdate.addClass(taskInput, "taskInput");
  domUpdate.addClass(taskInputBtn, "taskInputBtn");

  domUpdate.addTextContent(taskEditBtn, "Edit");
  domUpdate.addTextContent(taskRemoveBtn, "X");
  domUpdate.addTextContent(taskInputBtn, "Done");

  domUpdate.appendEl(taskInputDiv, taskInput, taskInputBtn);
  domUpdate.addTextContent(taskDivParagraph, todo.text);
  domUpdate.appendEl(taskDiv, taskDivParagraph, taskEditBtn, taskRemoveBtn);

  taskRemoveBtn.addEventListener("click", function () {
   taskMan.removeTodo(todo)
   
   domUpd.removeTodo(taskDiv)
   domUpd.removeTodo(taskInputDiv)
   console.log(taskMan.getArr());
  });

  return {
    taskDiv,
    taskInputDiv,
  };
};

// const btnRemoveEvent = (domUpd, todo, div, taskMan) => {
// domUpd.taskRemoveBtn.addEventListener("click", function () {
// console.log(taskMan.removeTask(todo));
// taskMan.removeTask(todo)
// console.log('domupd',domUpd);
// console.log('todo',todo);
// console.log('taskArr' ,taskMan.getArr());
// console.log(taskMan.showRemovedTasks());
// domUpd.removeFn(todo, taskMan.getArr())
// });
// };

// const btnEditEvent = (btn, todo, domUpd, arr) => {
// btn.addEventListener("click", function () {
//   const tarray = arr.getArr();
//   todo.setIsEditing(true);
//   if (todo.returnIsEditing) {
//     console.dir(domUpd.taskDiv);
//     console.log(domUpd.taskInputDiv);
//     console.log(domUpd);
//     domUpd.updateTask(domUpd.taskDiv, domUpd.taskInputDiv);
//     console.log(domUpd.returnTextContent(domUpd.taskDiv));
//     //  console.log(domUpd.returnTextContent(domUpd.taskInpuDiv));
//     domUpd.addTextContent(domUpd.taskInputDiv, domUpd.taskDiv.textContent);
//   }
//   console.log("btn", btn);
//   console.log("todo", todo);
//   console.log("arr", arr);
///////////////////////////////////
// Input div treba da bude tu a glavni div da se sakrije,

// text glavnog diva treba da bude u input divu
// text input diva da moze da se mijenja
// arr.editTask(todo);
///////////////////////////////////////////////////////
// todo.editTask(div, input);
// const divText = todo.text;
// const realDivText = divText.replace("EditX", "");
// input.firstChild.value = realDivText;
// console.log(todo);
// btnDoneEvent(input.lastChild, todo, div, input);
// });

//   const btnDoneEvent = (btn, todo, div, input) => {
//     btn.addEventListener("click", function () {
//       const inputFirstChild = input.firstChild;
//       const inputText = inputFirstChild.value;
//       div.textContent = inputText;
//       todo.setText(inputText);
//       todo.editTask(input, div);
//     });
//   };
// };

// export const createTodo = (tasksDiv, todo, taskMan, domUpd) => {
//   let inputText = input.value;
//   if (inputText !== "") {
//     const task = new todo(inputText);
//     createDivs(task, tasksDiv, taskMan, domUpd);
//     input.value = "";
//     taskMan.add(task);
//   }
// };
