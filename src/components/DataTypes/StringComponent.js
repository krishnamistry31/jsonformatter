import React, { Component } from "react";
class StringComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : &quot; {this.props.v} &quot;</div>
        );
    }
}
export default StringComponent;