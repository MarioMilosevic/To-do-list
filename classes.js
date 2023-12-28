'use strict'

export class TaskCreator {
    constructor(text) {
      this.text = text;
    }
  
    updateText(value) {
      return (this.text += value);
    }
  
    setText(value) {
      return (this.text = value);
    }
  
    removeTask(el) {
      el.remove();
    }
    editTask(a, b) {
      a.classList.add("hidden");
      b.classList.remove("hidden");
    }
  }