let abc = "abcdefghijklmnopqrstuvwxyz";
let word = '';

for (let i = 0; i < 10; i++) {
    word += abc[Math.round(Math.random() * (abc.length - 1))];
}
console.log(word);



function getRandomHex() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeHex() {
    let newColor = getRandomHex();
    document.body.style.backgroundColor = newColor;
}
changeHex();

// CAMEL CASE camelCase
const deleteSelf = document.querySelector("#delete-self");
const changeBackground = document.querySelector("#change-background");
const changeH1Text = document.querySelector("#change-h1-text");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const body = document.querySelector("body");

// #####################################################################
// DIFFERENT TYPES OF STRINGS IN JAVASCRIPT
// DOUBLE QUOTES
const email = "dont@forgetmy.email"; // "hi my name is" + name + " nice to meet you "

// SINGLE QUOTES ( SAME AS DOUBLE )
const email2 = "dont@forgetmy.email";

// BACK TICKS `````````````
const TLD = "com";
const email3 = `${Math.random()}@forgetmy.${TLD}`;
// STRING INTERPOLATION
// INTERPOLATION
// INTER - BETWEEN
// POL - TWO POINTS "POLES"

// #####################################################################

// #####################################################################
// LISTENING TO EVENTS

// deletes self
deleteSelf.addEventListener("click", function (event) {
    deleteSelf.parentElement.removeChild(event.target);
});
// changes body background
changeBackground.addEventListener("click", function (event) {
    const randomRGB = () => Math.floor(Math.random() * 256);
    body.style.background = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
});
// changes H1 text
changeH1Text.addEventListener("click", function (event) {
    h1.innerText = Math.random();
    // h1.innerHTML = "<li>oqwidjoqiwjd</li>";
});
    // click
    // double-clicking
    // scrolling
    // keydown
    // keyup

    // MANUAL ADBLOCKER
/* document.addEventListener("click", function(event) {
      event.target.parentElement.removeChild(event.target)
    }) */

/* /// AFTER
// ADIDAS
changeH1Text.addEventListener("click", () => {
  h1.innerText = "ADIDAS";
});
// ABIDAS
h1.addEventListener("click", function () {
  ChangeH1Text.innerHTML = "ABIDAS";
});
// ABIBAB
changeH1Text.addEventListener("click me!", function (event) {
  h1.changeH1Text.text = "you clicked";
});

changeH1Text.addEventListener("click", function (event) {
  h1.innerHTML = "Hi new Text!";
});

changeH1Text.addEventListener("click", () => {
  h1.innerText = "I love to fix broken code!";
}); */

/* document.addEventListener("click", function (event) {
  event.target.parentElement.removeChild(event.target).Math.random() * 10;
}); */
    // #####################################################################


/* const getMonth = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]

let rand = Math.floor(Math.random() * getMonth.length)
let randomValue = getMonth[rand]

console.log(randomValue) */

/* function selectMonth(length) {

    let result = '';
    const monthYear = monthYear.length;
    for (let i = 0; i < length; i++) {
        getResult = date.setMonth(Math.floor(Math.random() * monthYear));
    }
    console.log(getResult);
}
selectMonth(length); */