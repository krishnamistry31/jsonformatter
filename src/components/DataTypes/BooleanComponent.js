import React, { Component } from "react";
class BooleanComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : {this.props.v ? 'true':'false'} </div>
        );
    }
}
export default BooleanComponent;