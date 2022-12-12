import {useState} from "react"

function StateHold() {

    // You can keep state (string, numbers, boolearns, arrays, objects)

    const [brand, setBrand] = useState("Ford")
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red")

    return (
        <>
            <h1>{brand}</h1>
            <p>It is a {color} {model} from {year}</p>
        </>
    )
}

export default StateHold;