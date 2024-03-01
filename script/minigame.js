let random = 0;
let randomOption = "";
let result = "";

function rockPaperScissors(choice) {
  random = Math.floor(Math.random() * 3) + 1;
  /* choice = document.getElementById("choice").value; */

  switch (random) {
    case 1:
      randomOption = "Rock";
      break;
    case 2:
      randomOption = "Paper";
      break;
    case 3:
      randomOption = "Scissors";
      break;
    default:
      break;
  }

  result = determineWinner(choice, randomOption);
  document.getElementById("result").innerHTML =
    "User's choice: " +
    choice +
    "<br>Computer's choice: " +
    randomOption +
    "<br>" +
    result;
}

function determineWinner(choice, randomOption) {
  if (choice == randomOption) {
    return "It's a tie";
  } else if (
    (choice == "Rock" && randomOption == "Scissors") ||
    (choice == "Paper" && randomOption == "Rock") ||
    (choice == "Scissors" && randomOption == "Paper")
  ) {
    return "You win!";
  } else if (
    (choice == "Rock" && randomOption == "Paper") ||
    (choice == "Paper" && randomOption == "Scissors") ||
    (choice == "Scissors" && randomOption == "Rock")
  ) {
    return "You loose...";
  }
}
