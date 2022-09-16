// ----------------CRUD--------------------//
// add/see/update/delete
const myList = ["apple", "berrys", "banana"];

// ---------------CREATE------------------//
// push "adding", "CREATEing" something in array
myList.push("good morning")

myList.unshift("hello!")

myList.splice(1, 0, "hey world")
console.log("(after splice)", myList)

// READ
console.log("(before update)", myList);

//------------------------------------------
// VARIABLE -- is smth that varies (changes)
//------------------------------------------

//UPDATE
// first item is in zeroth position
myList[0] = "good night"
console.log(myList);

// DELETE
// shift -- remove
myList.shift();
console.log("(after shift)", myList);

// pop -- remove last item
myList.pop();
console.log("(after pop)", myList);
// !!!splice -- remove item x
myList.splice(1, 1)
console.log("(after splice)", myList)