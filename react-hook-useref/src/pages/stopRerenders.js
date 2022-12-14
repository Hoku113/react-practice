import {useState, useEffect, useRef} from "react"

function StopReRenders() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0); // return item: `current`

    useEffect(() => {
        count.current = count.current + 1;
    })

    return (
        <>
            <input
            type={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>

        </>
    )
}

export default StopReRenders