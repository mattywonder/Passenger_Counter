// let count = 5;
// count = count + 1;
// console.log(count);

// let firstBatch = 30;
// let secondBatch = 10;

// let count = firstBatch + secondBatch;

// console.log(count);

// function increment() {
//   console.log("Button clicked");
// }

// function countdown() {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   console.log(4);
//   console.log(5);
// }

// countdown();

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function Great() {
//   console.log(42);
// }

// Great();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// let laptime = lap1 + lap2 + lap3;

// Create a function that logs out the sum of all the lap times

// function logLapTime() {
//   console.log(laptime);
// }

// logLapTime();

/***********************/
/***********************/
/////////////////////////
/***********************/
// let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// function logIncrement() {
//   lapsCompleted = lapsCompleted + 1;
// }

// logIncrement();
// logIncrement();
// logIncrement();

// console.log(lapsCompleted);

// let count = 0;

// function increment() {
//   count = count + 1;
//   console.log(count);
// }

// let username = "Matty Wonder";

// let message = "You have three new notifications";

// console.log(message + ", " + username + "!");

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let myName = "Matty";
// let greetings = "Hi, my name is";

// let myGreeting = greetings + " " + myName;
// console.log(myGreeting);

/***********************/
/***********************/
/////////////////////////
/***********************/

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);

  let countStr = count + " - ";
  // saveEl.innerText += countStr;
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}
