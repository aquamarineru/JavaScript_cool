console.log("yep you connected js")
//------------------------------------------
// VARIABLE -- is smth that varies (changes)
//------------------------------------------

const myList = [
    { inProgress: true, text: "apple", date: new Date() },
    { inProgress: true, text: "banana", date: new Date() },
    { inProgress: true, text: "coffee", date: new Date() }
];
let editingIndex = 2;

//----------DOM ---- webpage----shortcuts----------/
const inputEl = document.querySelector('#user-text-input-element')
const targetEl = document.querySelector("#target")
const pendingToggleEl = document.querySelector("#pending-toggle")

//   LISTEN / PAY ATTENTION / OBSERVER / WAIT
// DOM NODE
// addEventListener(event type, function  ) <------- signature
//--------------------CREATE------------------------//
inputEl.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        //     console.log("key is enter!")
        console.log(inputEl.value) // value in input box
        const newItem = {
            done: false,
            text: inputEl.value,
            date: new Date()
        }
        myList.unshift(newItem)
        inputEl.value = ''
        render()
    }
})
//------------READ------------//
// create HTML, adding to the DOM (the page)
function render() {
    // take data {myList}
    // turn into "html" strings
    // put into the dom
    // "PRINT"
    //if showOnly inProgress, allow only inProgress: true items throught the fileter
    const myListAsHTML = myList
        .filter(function (item) {
            return showOnlyInProgress ? item.inProgress : true
        })
        .map(function (item, i) {
            return `
            <li >
                ${item.done}
                ${item.inProgress}
                ${item.date.toLocaleDateString('en-Us', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            })}
                <button onclick="check(${i})"><i class = 'fas fa-check'></i></button>
                <button onclick="remove(${i})"><i class = 'fas fa-trash'></i></button>
     
            </li>`})
        //    .reverse()
        //        .sort()
        .join("")

    targetEl.innerHTML = myListAsHTML
    //    console.log(myListAsHTML);
}
render()

//------------UPDATE-----------//

//myList[userClickIndex]=inputField.value
function toggleDone(i) {
    myList[i].done = !myList[i]
    console.log(myList[i])
    render()
}


//-------------DELETE---------//
function remove(i) {
    myList.splice(i, 1)
    render()
}

// filter out done
// a new piece of state in our app
let showOnlyInProgress = false;
pendingToggleEl.addEventListener('click', function (event) {
    showOnlyPending = !showOnlyPending
    pendingToggleEl.innerText = showOnlyPending ? "remove filter" : "show only pending"
    render()
    console.log(showOnlyPending)

})
/* 
const originalArray = [1, 2, 4, 6, 8]
const numToString = originalArray.map(num => JSON.stringify(num))
console.log(originalArray, numToString) */