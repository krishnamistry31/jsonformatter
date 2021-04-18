import React, { Component } from "react";
import '../../css/datatypes.css';
import DisplayComponent from "../DisplayComponent";
class ObjectComponent extends Component {
    constructor(props) {
        super(props);    

        this.state = {
            isHidden: false
        } 
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render(){
        const obj = this.props.v
        return (
            <div>&quot; {this.props.k} &quot; : {"{"} <button className="togglebtn" onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? '+' : '-'}</button>
                { !this.state.isHidden &&
                    Object.keys(obj).map((pKey,i)=>{
                    return (
                        <li key={i}>
                        <DisplayComponent
                            pKey = {pKey}
                            pValue = {obj[pKey]}
                        />
                        </li>
                        )
                    })
                }
            {"}"}</div>
        );
    }
}
export default ObjectComponent;