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