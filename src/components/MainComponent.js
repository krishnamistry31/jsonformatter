import React, { Component } from "react";
import '../css/main.css'
import DisplayComponent from "./DisplayComponent";
class MainComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          parsedObj: {},
          value: '',
          msg : '',
          processClicked: false
        };
    }
    
    changeHandler = event => {
        this.setState({ value: [event.target.value] });
    };

    Validate(){
        if(this.state.value.trim === ""){
            this.setState({msg : 'Enter value'})
        }
        else{
            try{
                var o = JSON.parse(this.state.value)
                this.setState({msg : 'Valid JSON'})
            }
            catch{
                this.setState({msg : 'Invalid JSON'})
            }
        }
    }

    Process(){
        if(this.state.value.trim === ""){
            this.setState({msg : 'Enter value'})
        }
        else{
            try{
                var o = JSON.parse(this.state.value)
                console.log(o)
                this.setState({parsedObj : o})
                this.setState({processClicked : true})
                this.setState({msg : ''})      
            }
            catch{
                this.setState({msg : 'Invalid JSON'})
            }
        }
    }

    render(){
        const obj = this.state.parsedObj;
        return (
            <div className = "main">
                <h1>JSON</h1>
                <textarea
                className = "txtarea"
                rows="6"
                cols="30"
                value={this.state.value}
                onChange={event => this.changeHandler(event)}
                placeholder="{}"
                />
                <br/>
                {this.state.msg ? <p className = "msg">{this.state.msg}</p>:null}
                <br/>
                <ul className="options">
                    <li><button className = "button" onClick = {()=>this.Validate()}>Validate</button></li>
                    <li><button className = "button" onClick = {()=>this.Process()}>Process</button></li>
                </ul>
                <div className="processedView" style={{display: this.state.processClicked ? 'block' : 'none' }}>
                    <ul>{"{"}
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
                    {"}"}</ul>
                </div>
            </div>
        );
    }
}

export default MainComponent;