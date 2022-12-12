import {useState} from "react"

function UpdateObjArr() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "blue"}
        })
    }

    return (
        <>
            <h1>{car.brand}</h1>
            <p>It is {car.color} {car.model} from {car.year}</p>

            <button type="button" onClick={updateColor}>blue</button>
        </>
    )
}

export default UpdateObjArr