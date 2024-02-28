/* let name = "";
let grade1 = 0;
let grade2 = 0;
let gpa = 0;

function result() {
  name = document.getElementById("name1").value;
  grade1 = parseInt(document.getElementById("grade1").value);
  grade2 = parseInt(document.getElementById("grade2").value);

  if (grade1 && grade2) {
    gpa = (grade1 + grade2) / 2;
    document.getElementById("result").innerHTML =
      "Student's name: " + name + "</br></br>GPA: " + gpa;
  } else {
    document.getElementById("result").innerHTML =
      "Please enter values on both text boxes";
  }
}

function reset() {
  document.getElementById("name1").value = null;
  document.getElementById("grade1").value = null;
  document.getElementById("grade2").value = null;
  document.getElementById("result").innerHTML = null;
} */

function getGPA() {
  let studentName = prompt("Enter your name");
  let grade101 = Number(prompt("Enter your grade 101"));
  let grade102 = Number(prompt("Enter your grade 102"));

  let gpa = (grade101 + grade102) / 2;

  document.getElementById("grades").innerHTML += `<div>
      <p>${studentName}</p>
      <p>${gpa}</p>
    </div>`;
}

let finalTotal = 0;

function getProduct() {
  let productName = prompt("Enter the product name");
  let price = Number(prompt("Enter the price"));
  let quantity = Number(prompt("How many products?"));

  let total = price * quantity;
  finalTotal += total;

  document.getElementById("total").innerHTML = `Total -- $${finalTotal.toFixed(
    2
  )}`;

  document.getElementById("products").innerHTML += `<li>
      <p>Product name: ${productName}</p>
      <p>Price: $${price.toFixed(2)}</p>
      <p>Quantity: ${quantity}</p>
      <p>Total: $${total.toFixed(2)}</p>
    </li>`;
}
