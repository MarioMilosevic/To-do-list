"use strict";

export function init() {
  const taskArr = [];
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");
  const tasks = document.querySelector(".tasks");
  return {
    input,
    btn,
    tasks,
    taskArr,
  };
}
