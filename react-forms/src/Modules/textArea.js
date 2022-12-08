import { useState } from "react";

function TextArea(){
    const [textarea, setTextarea] = useState(
        "The contentn of a text area goes in the value attribute"
    )

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

export default TextArea