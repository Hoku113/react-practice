import {useState, createContext, useContext} from "react"

const UserContext = createContext();

// parent component
function Component1(){
    const [user, setUser] = useState("Jesse Hall")

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

// -------- child component -------

function Component2() {
    return (
        <>
            <h1>Component2</h1>
            <Component3 />
        </>
    )
}

function Component3() {
    return(
    <>
        <h1>Component3</h1>
        <Component4 />
    </>
    )
}

function Component4() {
    return (
        <>
            <h1>Component4</h1>
            <Component5 />
        </>
    )
}

function Component5(){
    // call created Context
    const user = useContext(UserContext)

    return (
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again`}</h2>
        </>
    )
}

export default Component1