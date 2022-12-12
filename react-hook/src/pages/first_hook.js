import React, {useState} from 'react'

function FirstHook() {
    // default color
    const [color, setColor] = useState("red");   

    return (
        <>
            <h1>{color}</h1>
            <button type="button" onClick={() => setColor("blue")}>blue</button>
            <button type="button" onClick={() => setColor("red")}>red</button>
            <button type="button" onClick={() => setColor("pink")}>pink</button>
            <button type="button" onClick={() => setColor("green")}>green</button>
        </>
    )
}

export default FirstHook;