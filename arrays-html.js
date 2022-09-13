// ################################################
//
//          HTML LISTS / LOOPS / ARRAYS
//          make list on screen with for
//          make list on screen with forEach
//          make list on screen with map
//          try sort with map
//          try filter with map
//          now make a to do list app...
//
// ################################################
const listElement = document.querySelector("#insert-list-here")
const listElement2 = document.querySelector("#insert-list-here2")
const listElement3 = document.querySelector("#insert-list-here3")
const listElement4 = document.querySelector("#insert-list-here4")
const listElement5 = document.querySelector("#insert-list-here5")

let myToDoList = [
    "wash the kitchen",
    "do the laundry",
    "walk the dog",
    "call my lawyer",
    "be good at programming",
    "make a to do list"
]

for (let i = 0; i < myToDoList.length; i++) {
    listElement.innerHTML += myToDoList[i] + "<br />";
}
// time complexity of n
//     ARRAY METHOD FOREACH

myToDoList.forEach((item) => {
    listElement2.innerHTML += `
    <li class="list-item">
        ${item}
    </li>
    `;
});

//     ARRAY METHOD MAP
//    myToDoLisInHTML          map is a higher-order function
const mappedListToHTML = myToDoList.map((item) => {
    return `
    <li class="list-item">
        ${item}
    </li>
    `;
});
// console.log(myToDoLisInHTML);
//console.log(listToHTML.join(""));
// time complexity of 1
// space complexity of n
// 1 step to apdate the HTML
listElement3.innerHTML = mappedListToHTML.join("");

function sortByLength(a, b) {
    return a.length - b.length;
}

//   ARRAY METHOD SORT

const sortedMappedListHTML = myToDoList.sort(sortByLength).map((item) => {
    return `
    <li class="list-item">
        ${item}
    </li>
    `;
});


listElement4.innerHTML = sortedMappedListHTML.join("");
/**
 * document.getElementById
 * document.getElementByClassName
 * document.querySelector("button")
 * document.querySelectorAll("button")
 * document.querySelector("#someId")
 * document.querySelectorAll(".flex-item")
 */

