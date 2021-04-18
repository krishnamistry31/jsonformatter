import React, { Component } from "react";
import '../css/main.css'
import DisplayComponent from "./DisplayComponent";
class MainComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          parsedObj: {},
          value: '',
          errMsg : '',
          processClicked: false,
          isHidden: false
        };
    }
    
    changeHandler = event => {
        this.setState({ value: [event.target.value] });
    };

    Validate(){
        if(this.state.value.trim === ""){
            this.setState({errMsg : 'Enter value'})
            this.setState({msg : ''})
        }
        else{
            try{
                var o = JSON.parse(this.state.value)
                this.setState({msg : 'Valid JSON'})
                this.setState({errMsg : ''})      
            }
            catch{
                this.setState({errMsg : 'Invalid JSON'})
                this.setState({msg : ''})
            }
        }
    }

    Process(){
        if(this.state.value.trim === ""){
            this.setState({errMsg : 'Enter value'})
            this.setState({msg : ''})
        }
        else{
            try{
                var o = JSON.parse(this.state.value)
                console.log(o)
                this.setState({parsedObj : o})
                this.setState({processClicked : true})
                this.setState({errMsg : ''})      
                this.setState({msg : 'Valid JSON'})
            }
            catch{
                this.setState({errMsg : 'Invalid JSON'})
                this.setState({msg : ''})
            }
        }
    }

    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
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
                {this.state.errMsg ? <p className = "errmsg">{this.state.errMsg}</p>:null}
                {this.state.msg && !this.state.processClicked? <p className = "msg">{this.state.msg}</p>:null}
                <br/>
                <ul className="options">
                    <li><button className = "button" onClick = {()=>this.Validate()}>Validate</button></li>
                    <li><button className = "button" onClick = {()=>this.Process()}>Process</button></li>
                </ul>
                <div style={{display: this.state.processClicked ? 'block' : 'none' }}>
                    <h1>Formatted JSON data</h1>
                    {this.state.msg ? <p className = "msg">{this.state.msg}</p>:null}
                    <div className="processedView" >
                        <ul>{"{"} <button className="togglebtn" onClick={this.toggleHidden.bind(this)}>{this.state.isHidden ? '+' : '-'}</button>
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
                        {"}"}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;