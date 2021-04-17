import React, { Component } from "react";
class NumberComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : {this.props.v} </div>
        );
    }
}
export default NumberComponent;