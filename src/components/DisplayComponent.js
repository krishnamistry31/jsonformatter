import React, { Component } from "react";
import StringComponent from "./DataTypes/StringComponent";
import NumberComponent from "./DataTypes/NumberComponent";
import NullComponent from "./DataTypes/NullComponent";
import BooleanComponent from "./DataTypes/BooleanComponent";
import ArrayComponent from "./DataTypes/ArrayComponent";
import ObjectComponent from "./DataTypes/ObjectComponent";

class DisplayComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pKey : props.pKey,
            pValue : props.pValue,
            type : typeof(props.pValue)
        };
    }

    renderElement(){
        const t = this.state.type;
        const k = this.state.pKey;
        const v = this.state.pValue;
        if(t === 'string')
            return <StringComponent k = {k} v = {v}/>;
        else if(t === 'number')
            return <NumberComponent k = {k} v = {v}/>;
        else if(t === 'boolean')
            return <BooleanComponent k = {k} v = {v}/>;
        else if(t === 'object' && v === null)
            return <NullComponent k = {k} v = {v}/>;
        else if(t === 'object' && Array.isArray(v))
            return <ArrayComponent k = {k} v = {v}/>;
        else if(t === 'object')
            return <ObjectComponent k = {k} v = {v}/>;
        return null;
    }

    render(){
        return (
            <div>
                {this.renderElement()}
            </div>
        );
    }
}
export default DisplayComponent;