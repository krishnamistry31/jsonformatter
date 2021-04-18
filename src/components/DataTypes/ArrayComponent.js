import React, { Component } from "react";
import '../../css/datatypes.css';
import DisplayComponent from "../DisplayComponent";
class ArrayComponent extends Component {
    constructor(props) {
        super(props);   

        this.state = {
            isHidden: false,
            isObjectHidden: false
        } 
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    toggleObjectHidden () {
        this.setState({
            isObjectHidden: !this.state.isObjectHidden
        })
    }

    renderValue(val){
        const t = typeof(val);
        console.log(t)
        if(t === 'string')
            return <span style={{paddingLeft:"30px"}}> &quot; {val} &quot;</span>
        else if(t === "number")
            return <span style={{paddingLeft:"30px"}}>{val}</span>
        else if(t === "object")
            return <div style={{paddingLeft:"30px"}}> {"{"} <button className="togglebtn" onClick={this.toggleObjectHidden.bind(this)}>{this.state.isObjectHidden ? '+' : '-'}</button>
                        { !this.state.isObjectHidden &&
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
            <div>&quot; {this.props.k} &quot; : [ <button className="togglebtn" onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? '+' : '-'}</button>
                    { !this.state.isHidden &&
                    this.props.v.map((val,i)=>{
                        return <span key={i} >{ (i ? ', ' : '')} <br/>{this.renderValue(val) } </span>;
                    })} 
                ] 
            </div>
        );
    }
}
export default ArrayComponent;