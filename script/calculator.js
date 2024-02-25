let a = 0;
let b = 0;
let select = 0;

function result() {
  select = parseInt(document.getElementById("option").value);

  if (select === 1) {
    addition();
  } else if (select === 2) {
    subtraction();
  } else if (select === 3) {
    multiplication();
  } else if (select === 4) {
    division();
  } else {
    document.getElementById("result").innerHTML = "Please enter a valid option";
  }
}

function addition() {
  a = parseInt(document.getElementById("value1").value);
  b = parseInt(document.getElementById("value2").value);
  document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function subtraction() {
  a = parseInt(document.getElementById("value1").value);
  b = parseInt(document.getElementById("value2").value);
  document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function multiplication() {
  a = parseInt(document.getElementById("value1").value);
  b = parseInt(document.getElementById("value2").value);
  document.getElementById("result").innerHTML = "Result: " + a * b;
}

function division() {
  a = parseInt(document.getElementById("value1").value);
  b = parseInt(document.getElementById("value2").value);
  if (b === 0) {
    document.getElementById("result").innerHTML = "Undefined result";
  } else {
    document.getElementById("result").innerHTML = "Result: " + a / b;
  }
}

function reset() {
  document.getElementById("value1").value = null;
  document.getElementById("value2").value = null;
  document.getElementById("result").innerHTML = null;
}
