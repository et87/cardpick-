"strict";

console.log("this works");

let fullstack = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52,
];

let runs = [];

function cardPick() {
  let pickStack = [];
  let days = 0;
  while (pickStack.length != 52) {
    let num = Math.floor(Math.random() * 52);
    let ranCard = fullstack[num];
    if (!pickStack.includes(ranCard)) {
      pickStack.push(ranCard);
    } else {
    }

    days++;
  }

  console.log(pickStack);
  console.log(days);
  runs.push(days);
}

const average = (arr) =>
  arr.reduce((acc, v) => acc + v) / arr.length;

function startTest() {
  while (runs.length < 100) {
    cardPick();
  }
  let ave = average(runs);
  console.log(ave + " this is the average days");
}

startTest();
