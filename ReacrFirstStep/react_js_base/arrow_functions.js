// Normal function
hello = function() {
    return "Hello World"
}

console.log("Normal function: " + hello)

// Arrow Function
hello = () => {
    return "Hello World";
}

console.log("Arrow function: " + hello)

// Only one statement and the statement returns a value
hello = () => "Hello World"

console.log("One statement Arrow function: " + hello)

// with Parameters
hello = (val) => "Hello " + val;

console.log("Arrow function with parameters: " + hello)

// only one parameter
hello = val => "Hello " + val;

console.log("Arrow function with One parameter: " + hello)

