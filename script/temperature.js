let temp = 0;
let scale = "";
let scale2 = "";
let result = 0;

function convertTemp() {
  temp = Number(document.getElementById("temp").value);
  scale = document.getElementById("scale").value;

  if (scale == "Celsius") {
    result = convertFahr(temp);
    scale2 = "Fahrenheit";
  } else if (scale == "Fahrenheit") {
    result = convertCels(temp);
    scale2 = "Celsius";
  }

  document.getElementById(
    "result"
  ).innerHTML = `The conversion of ${temp}° ${scale} to ${scale2} is ${result}°`;

  const element = document.getElementById("result");
  element.classList.remove("display-none");
  element.classList.add("display-ib");
}

function convertFahr(temp) {
  result = (temp * 9) / 5 + 32;

  return result;
}

function convertCels(temp) {
  result = ((temp - 32) * 5) / 9;

  return result;
}
