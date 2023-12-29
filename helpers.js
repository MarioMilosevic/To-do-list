"use strict";
const createDiv = (todo, todoParent, taskMan, domUpd) => {
  const domUpdate = new domUpd();
  domUpdate.addClass(domUpdate.taskDiv, "taskDiv");
  domUpdate.addClass(domUpdate.taskRemoveBtn, "taskRemoveBtn");
  domUpdate.addClass(domUpdate.taskEditBtn, "taskEditBtn");
  domUpdate.addClass(domUpdate.taskInputDiv, "taskInputDiv", "hidden");
  domUpdate.addClass(domUpdate.taskInput, "taskInput");
  domUpdate.addClass(domUpdate.taskInputBtn, "taskInputBtn");

  domUpdate.addTextContent(domUpdate.taskEditBtn, "Edit");
  domUpdate.addTextContent(domUpdate.taskRemoveBtn, "X");
  domUpdate.addTextContent(domUpdate.taskInputBtn, "Done");

  domUpdate.appendEl(
    domUpdate.taskInputDiv,
    domUpdate.taskInput,
    domUpdate.taskInputBtn
  );
  domUpdate.addTextContent(domUpdate.taskDiv, todo.text);
  domUpdate.appendEl(
    domUpdate.taskDiv,
    domUpdate.taskEditBtn,
    domUpdate.taskRemoveBtn
  );

  todoParent.append(
    domUpdate.returnEl(domUpdate.taskDiv),
    domUpdate.returnEl(domUpdate.taskInputDiv)
  );

  btnRemoveEvent(domUpdate, todo, domUpdate.taskDiv, taskMan);

  btnEditEvent(domUpdate.taskEditBtn,todo,domUpdate,taskMan);
};

const btnRemoveEvent = (domUpd, todo, div, taskMan) => {
  domUpd.taskRemoveBtn.addEventListener("click", function () {
    // console.log(taskMan.removeTask(todo));
    // taskMan.removeTask(todo)
    // console.log('domupd',domUpd);
    // console.log('todo',todo);
    // console.log('taskArr' ,taskMan.getArr());
    // console.log(taskMan.showRemovedTasks());
    // domUpd.removeFn(todo, taskMan.getArr())
  });
};

const btnEditEvent = (btn, todo, domUpd, arr) => {
  btn.addEventListener("click", function () {
    const tarray = arr.getArr();
    todo.setIsEditing(true);
    if(todo.returnIsEditing){
      console.log(domUpd.taskDiv);
      console.log(domUpd.taskInputDiv);
      console.log(domUpd);
     const mario = domUpd.updateTask(domUpd.taskDiv, domUpd.taskInputDiv)
     console.log(mario);
    }
    console.log("btn", btn);
    console.log("todo", todo);
    console.log("arr", arr);
    ///////////////////////////////////
    // Input div treba da bude tu a glavni div da se sakrije, 

    // text glavnog diva treba da bude u input divu
    // text input diva da moze da se mijenja
    arr.editTask(todo);
    ///////////////////////////////////////////////////////
    // todo.editTask(div, input);
    // const divText = todo.text;
    // const realDivText = divText.replace("EditX", "");
    // input.firstChild.value = realDivText;
    // console.log(todo);
    // btnDoneEvent(input.lastChild, todo, div, input);
  });

  const btnDoneEvent = (btn, todo, div, input) => {
    btn.addEventListener("click", function () {
      const inputFirstChild = input.firstChild;
      const inputText = inputFirstChild.value;
      div.textContent = inputText;
      todo.setText(inputText);
      todo.editTask(input, div);
    });
  };
};

export const createTodo = (tasksDiv, todo, taskMan, domUpd) => {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new todo(inputText);
    createDiv(task, tasksDiv, taskMan, domUpd);
    input.value = "";
    taskMan.add(task);
  }
};
