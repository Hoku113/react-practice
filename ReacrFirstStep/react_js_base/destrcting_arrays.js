const vehicles = ['mustang', 'f-150', 'expedition']

/* Old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
*/

/* Destructuring
const [car, truck, suv] = vehicles
*/

// another
const [car,, suv] = vehicles;


// Example
function calculate(a, b){
    const add = a + b;
    const substract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, substract, multiply, divide];
}

const [add , substract, multiply, divide] = calculate(4, 7);

// Destructuring Objects
const vehiclesOne = {
    brand: 'Ford', 
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehiclesOne);

/* old way
function myVehicle(vehicle){
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
*/

function myVehicle({type, color, brand, model}){
    const message = 'My ' + type + 'is a ' + color + ' ' + brand + ' ' + model + '.';
}

const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang', 
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicleTwo(vehicleTwo)

function myVehicle({model, registration: {state}}){
    const message = 'My ' + model + 'is reistered in ' + state + '.';
}