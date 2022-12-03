import React from "react";
import Child from "./Modules/Child";

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true};
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render(){
        let myheader;
        if(this.state.show){
            myheader = <Child />
        };
        return(
            <>
            {myheader}
            <button 
            type="button"
            onClick={this.delHeader}>
                delete Header
            </button>
            </>
        );
    }
}

export default Container;