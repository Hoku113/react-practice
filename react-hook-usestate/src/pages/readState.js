import {useState} from "react"

function ReadState() {
    const [color, setColor] = useState("red");

    return <h1>{color}</h1>
}

export default ReadState;