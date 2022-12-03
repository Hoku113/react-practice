function Football3(){
    const shoot = (a, b) =>{
        alert(b.type);
    }
    return (
        <button onClick={(event) => shoot("Goal", event)}> Take the shoot</button>
    )
}

export default Football3;