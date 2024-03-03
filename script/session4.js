// for loop
/* for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let j = 10; j <= 100; j++) {
  console.log(j);
}
 */

// Multiplication table
/* for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + i * 5);
} */

function multiplicationTable(n) {
  document.write(`<h2>Multiplication table for ${n}</h2>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`<p>${n} x ${i} = ${n * i}</p>`);
  }
}

multiplicationTable(5);
multiplicationTable(4);
multiplicationTable(7);

// while
let i = 99;
while (i > 0) {
  console.log(i);
  i--;
}

// do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

function minigame() {
  let random = Math.floor(Math.random() * 3) + 1;
  let guess = Number(prompt("Guess the number between 1 and 10"));

  while (guess !== random) {
    guess = Number(prompt("Try again! Guess the number between 1 and 10"));
  }

  console.log("Congratulations");
}

function minigamePass() {
  let pass = "Hello123";
  let tries = 1;

  let guess = prompt("Guess the correct password");

  while (tries < 3) {
    if (guess == pass) {
      console.log("Congratulations");
      break;
    } else {
      guess = prompt("Try again! Guess the correct password");
      tries++;
    }
  }
}

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
