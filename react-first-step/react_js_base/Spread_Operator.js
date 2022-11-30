const numberOne = [1, 2, 3]
const numberTwo = [4, 5, 6]
const numbersCombined = [...numberOne, ...numberTwo]

// using rest
const numbers = [1, 2, 3, 4, 5, 6]

/*
using rest

output:
1,
2,
3, 4, 5, 6
*/

const [one, two, ...rest] = numbers; 

// Combine these two objects

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}