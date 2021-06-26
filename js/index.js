'use strict';

// const [btn1, btn2] = document.querySelectorAll('button');
// let timeoutId;

// btn1.addEventListener('click', e => {
//   console.log('Hi!');

//   timeoutId = setTimeout(() => {
//     console.log('Hi after 10s!');
//   }, 10000);
// });

// btn2.addEventListener('click', e => {
//   clearTimeout(timeoutId);
// });

// callback выполнится 1 раз  через как минимум delay ms
// timeoutId = setTimeout(callback, delay);
// clearTimeout(timeoutId);

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(count++);
// }, 1000);
// clearInterval(intervalId);

// callback выполнится с периодичностью как минимум delay ms
// intervalId = setInterval(callback, delay);
// clearInterval(intervalId);

// const timerDiv = document.getElementById('timer');
// const [startBtn, stopBtn, resetBtn] = document.querySelectorAll('button');

// const DELAY = 10;
// let intervalId = null;
// let time = new Date();
// time.setMinutes(0, 0, 0);

// startBtn.addEventListener('click', () => {
//   if (intervalId) return;
//   intervalId = setInterval(addTime, DELAY);
// });

// stopBtn.addEventListener('click', () => {
//   if (intervalId) {
//     clearInterval(intervalId);
//     intervalId = null;
//   }
// });

// resetBtn.addEventListener('click', () => {
//   time.setMinutes(0, 0, 0);
//   updateTime();
// });

// function addTime() {
//   time.setMilliseconds(time.getMilliseconds() + DELAY);
//   updateTime();
// }

// function updateTime() {
//   timerDiv.textContent = `${timeFormat2(time.getMinutes())}:${timeFormat2(
//     time.getSeconds()
//   )}.${timeFormat3(time.getMilliseconds())}`;
// }

// function timeFormat2(value) {
//   return value > 9 ? value : `0${value}`;
// }

// function timeFormat3(value) {
//   return value > 99 ? value : value > 9 ? `0${value}` : `00${value}`;
// }

setTimeout(() => {
  for (let i = 0; i < 100000; i++) {
    console.log(i);
  }
}, 0);

console.log('AFTER FOR 1');
console.log('AFTER FOR 2');
console.log('AFTER FOR 3');
console.log('AFTER FOR 4');
