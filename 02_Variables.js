// Variables

// variables with var 
// var works globally

var name = "Victor"
console.log(name)

var age = 7;
console.log(edad);

var person  = {
    name:"Victor",
    lastname: "Cortez",
    age: 22,
    address:{
        street: "13 calle poniente",
        numberTheHouse: 123,
    },
    citysVisited: [
        'Guatemala',
        'San salvador',
        'Armenia'
    ]
}

console.log(person);

var city;
city = 'Sonsonate'
console.log(city); // undefined

// variables with let
// let only works within a specific block of code where it is said
let name = "Victor";
console.log(name);

{
    let greetings = "Hello i'm Victor";
    console.log(greetings);
}

console.log(greetings); // It is outside the block of code where the let

{
    var greetings = "Hello i'm Victor";
    console.log(greetings);
}

console.log(greetings); // var allows it since it is a global variable.

// Variables with CONST
// variables that cannot change, and must be initialized.
const PI = 3.1416;
console.log(PI);