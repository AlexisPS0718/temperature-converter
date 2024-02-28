let temperature = 0;
let fahrenheit = 0;

function convert() {
  temperature = Number(document.getElementById("temp").value);

  fahrenheit = (temperature * 9) / 5 + 32;

  document.getElementById(
    "result"
  ).innerHTML = `The conversion of ${temperature}° Celsius to Fahrenheit is ${fahrenheit}°`;

  const element = document.getElementById("result");
  element.classList.remove("display-none");
  element.classList.add("display-ib");
}
