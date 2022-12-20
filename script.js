const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

const redNum = document.querySelector("#red-value");
const greenNum = document.querySelector("#green-value");
const blueNum = document.querySelector("#blue-value");

let r = 0;
let g = 155;
let b = 200;

setValue();

function setValue() {
  red.value = r;
  green.value = g;
  blue.value = b;
}

setInnerText()

function setInnerText(){
redNum.innerText = r;
greenNum.innerText = g;
blueNum.innerText = b;
}
    
function setBackgroundColor(r, g, b) {
  const main = document.querySelector("body");
  main.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

red.addEventListener("input", (event) => {
  r = event.target.value;
  setBackgroundColor(r, g, b);
  setInnerText()
});

green.addEventListener("input", (event) => {
  g = event.target.value;
  setBackgroundColor(r, g, b);
  setInnerText()
});

blue.addEventListener("input", (event) => {
  b = event.target.value;
  setBackgroundColor(r, g, b);
  setInnerText()
});

const randomBtn = document.querySelector("button");
randomBtn.addEventListener("click", colorValue);

function colorValue() {
  //   r = Math.floor((Math.random() * 255)-1)
  // g = Math.floor((Math.random() * 255)-1)
  // b = Math.floor((Math.random() * 255)-1)

  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      r = data.rgb.r;
      g = data.rgb.g;
      b = data.rgb.b;

      setInnerText()
      setValue();
      setBackgroundColor(r, g, b);
    });
}

setBackgroundColor(r, g, b);
