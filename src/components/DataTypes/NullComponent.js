import React, { Component } from "react";
class NullComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : null </div>
        );
    }
}
export default NullComponent;