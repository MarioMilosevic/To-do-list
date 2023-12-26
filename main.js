"use strict";
import { init } from "./constants";

const { btn, input } = init();

class ToDoList {
  constructor(text) {
    this.text = text;
  }
}

btn.addEventListener("click", function () {
  let inputText = input.value;
  const task = new ToDoList(inputText);
  console.log(task);
//   inputText = "";
  console.log(input);
});
