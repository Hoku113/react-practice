function Garage(props){
    const cars = props.cars;
    return (

        <>
            <h1>Garage</h1>
            {/* same if statement */}
            {cars.length > 1 && 
                <h2>
                    You have {cars.length} cars in your Garage
                </h2>
            }
        </>
    )
}

export default Garage;