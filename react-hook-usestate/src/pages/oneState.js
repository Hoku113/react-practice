import {useState} from "react";

function OneState() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "model",
        year: "1964",
        color: "red",
    });

    return (
        <>
            <h1>{car.brand}</h1>
            <p>It is a {car.color} {car.model} from {car.year}</p>
        </>
        
    )
}

export default OneState;