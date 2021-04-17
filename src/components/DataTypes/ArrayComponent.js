import React, { Component } from "react";
import DisplayComponent from "../DisplayComponent";
class ArrayComponent extends Component {
    constructor(props) {
        super(props);    
    }

    renderValue(val){
        const t = typeof(val);
        console.log(t)
        if(t === 'string')
            return <span> &quot; {val} &quot;</span>
        else if(t === "number")
            return <span>{val}</span>
        else if(t === "object")
            return <div style={{paddingLeft: "30px"}}> {"{"} 
                        {
                            Object.keys(val).map((pKey,i)=>{
                            return (
                                <li key={i}>
                                <DisplayComponent
                                    pKey = {pKey}
                                    pValue = {val[pKey]}
                                />
                                </li>
                                )
                            })
                        }
                    {"}"}</div>
    }

    render(){
        return (
            <div>&quot; {this.props.k} &quot; : [ 
                    {this.props.v.map((val,i)=>{
                        return <span key={i} style={{paddingLeft:"30px"}}>{ (i ? ', ' : '')} {this.renderValue(val) }</span>;
                    })} 
                ] 
            </div>
        );
    }
}
export default ArrayComponent;