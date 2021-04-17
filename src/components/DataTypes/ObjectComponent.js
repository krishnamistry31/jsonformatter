import React, { Component } from "react";
import DisplayComponent from "../DisplayComponent";
class ObjectComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render(){
        const obj = this.props.v
        return (
            <div>&quot; {this.props.k} &quot; : {"{"} 
                {
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