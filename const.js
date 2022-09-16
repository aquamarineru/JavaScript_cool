const user = {
    name: "bob",
    age: "23"
}
user.age = 23
user.name = "Bob"
user.hobbies = ["swimming"]

// CANT CHANGE 
user = "hi" //TypeError: Attempted to assign to readonly property.


console.log(user)