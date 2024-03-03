let temp = 0;
let temp1 = 0;
let temp2 = 0;
let scale = "";
let scale2 = "";
let result = 0;
let percent = 0;
let cel = 0;

function convertTemp() {
  temp = Number(document.getElementById("temp").value);
  scale = document.getElementById("scale").value;

  if (scale == "Celsius") {
    result = convertFahr(temp);
    cel = temp;
    scale2 = "Fahrenheit";
  } else if (scale == "Fahrenheit") {
    result = convertCels(temp);
    cel = convertCels(temp);
    scale2 = "Celsius";
  }

  if (cel >= 50) {
    percent = 90;
  } else {
    percent = (cel * 90) / 50;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>The conversion of ${temp}° ${scale} to ${scale2} is ${result}°</p>`;

  document.documentElement.style.setProperty("--final-height", percent + "%");
  document.getElementById("result").style.display = "inline-block";
  document.getElementById("result2").style.display = "none";
  document.getElementById("stick").style.animation = "animation 3s forwards";
  document.getElementById("base").style.animation = "base 3s forwards";
}

function convertTempRange() {
  let txt = "";
  temp1 = Number(document.getElementById("temp1").value);
  temp2 = Number(document.getElementById("temp2").value);
  let scaleR = document.getElementById("scaleR").value;

  if (scaleR == "Celsius") {
    cel = temp2;
  } else if (scaleR == "Fahrenheit") {
    cel = convertCels(temp2);
  }

  if (cel >= 50) {
    percent = 90;
  } else {
    percent = (cel * 90) / 50;
  }

  for (let i = temp1; i <= temp2; i++) {
    if (scaleR == "Celsius") {
      result = convertFahr(i);
      txt =
        txt +
        `<p>The conversion of ${i}° ${scaleR} to Fahrenheit is ${result}°</p>`;
    } else if (scaleR == "Fahrenheit") {
      result = convertCels(i);
      txt =
        txt +
        `<p>The conversion of ${i}° ${scaleR} to Celsius is ${result}°</p>`;
    }
  }

  document.getElementById("result2").innerHTML = txt;

  document.documentElement.style.setProperty("--final-height", percent + "%");
  document.getElementById("result2").style.display = "inline-block";
  document.getElementById("result").style.display = "none";
  document.getElementById("stick").style.animation = "animation 3s forwards";
  document.getElementById("base").style.animation = "base 3s forwards";
}

function convertFahr(temp) {
  result = (temp * 9) / 5 + 32;

  return result;
}

function convertCels(temp) {
  result = ((temp - 32) * 5) / 9;

  return result;
}
