"use strict";

export function init() {
  const input = document.querySelector(".input");
  const addBtn = document.querySelector(".btn");
  const tasks = document.querySelector(".tasks");
  return {
    input,
    addBtn,
    tasks,
  };
}

// const arr = [1,2,3,4,5]
// const removed = []
// removed.push(...arr.splice(0,1))
// console.log(arr);
// console.log(removed);


