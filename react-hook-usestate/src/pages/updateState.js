import {useState} from 'react'

function UpdateState() {
    const [color, setColor] = useState("red");

    return (
        <>
        <h1>{color}</h1>
        <button type='button' onClick={() => setColor("blue")}>blue</button>        
        </>
    )
}

export default UpdateState