"use strict";
 const createDiv = (obj, parent, taskMan, domUpd) => {
  const domUpdate = new domUpd()
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

  btnRemoveEvent(domUpdate, obj, domUpdate.taskDiv, taskMan);
  btnEditEvent(domUpdate.taskEditBtn, obj, domUpdate.taskDiv, domUpdate.taskInputDiv, taskMan);
};

const btnRemoveEvent = (domUpd, el, div, taskMan) => {
  domUpd.taskRemoveBtn.addEventListener("click", function () {
    taskMan.removeTask(el)
    domUpd
  });
};

const btnEditEvent = (btn, el, div, input, arr) => {
  btn.addEventListener("click", function () {
    console.log('btn', btn);
    console.log('el',el);
    console.log('div' ,div);
    console.log('input', input);
    ///////////////////////////////////
    arr.editTask(el)
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

export const createTodo = (o, todo, taskMan, domUpd) => {
  let inputText = input.value;
  if (inputText !== "") {
    const task = new todo(inputText);
    createDiv(task, o, taskMan, domUpd);
    input.value = "";
    taskMan.add(task)
  }
}