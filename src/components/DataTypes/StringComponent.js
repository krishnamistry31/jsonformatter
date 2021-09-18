import React, { Component } from "react";
class StringComponent extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            val : props.v
        }  
    }

    handleChange(e){
        this.setState({'val' : [e.target.value]})
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : 
            <input type = "text" value = {this.state.val} onChange = {(e) => this.handleChange(e)}></input> 
            </div>
        );
    }
}
export default StringComponent;