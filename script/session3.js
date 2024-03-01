let yourName = "";

function getName() {
  yourName = prompt("What is your name?");

  if (confirm("Are you " + yourName + "?")) {
    console.log("Hello " + yourName);
  } else {
    console.log("Then what is your name?");
  }
}

let age = 0;

function getDriverLicense() {
  age = prompt("How old are you?");

  if (age >= 18) {
    alert("Congratulations! You can get your driving license");
  } else {
    alert("Sorry, you are too young to get a driving license");
  }
}

let random = 0;
let guess = 0;

function guessNumber() {
  random = Math.floor(Math.random() * 10) + 1;

  guess = prompt("Guess the number");

  if (guess == random) {
    document.getElementById("result").innerHTML =
      "Congratulations! You guessed the number.";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, that's not correct. The number was " + random;
  }
}

let user = "mymail@mail.com";
let pass = "password123";

function login() {
  let input = prompt("Enter your username");
  let input2 = prompt("Enter your password");

  if (input == user && input2 == pass) {
    document.getElementById("db-result").innerHTML = "Welcome to the system";
  } else {
    document.getElementById("db-result").innerHTML = "Invalid credentials";
  }
}
