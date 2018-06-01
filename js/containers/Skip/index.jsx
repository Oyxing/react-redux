import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Skip extends Component {
    constructor(props) {
        super(props);
        this.hardChange = this.hardChange.bind(this);  //bind(this)  this 找不到
        this.submitHandler = this.submitHandler.bind(this);  //bind(this)  this 找不到
        this.state = {
            msg:''
        }
      }
    
    //   focus() {
    //     // 通过使用原生API，显式地聚焦text输入框
    //     this.textInput.focus();
    //     console.log(this.textInput)
    //   }

    hardChange(event) {
         this.refs.mydiv.style.width = '100px'
         this.refs.mydiv.style.height = '100px'
         this.refs.mydiv.style.backgroundColor = 'red'
        this.setState({
            msg: event.target.value,
            given_name: "",
            family_name: ""
        });
    }

    handleChange(name, event) {
        var newState = {};
        newState[name] = event.target.value;
        this.setState(newState);

    }
    submitHandler(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h2>ref</h2>
                    <div ref="mydiv"></div>
                    <input type="text" value={this.state.msg} onChange={this.hardChange}/>
                    <br />
                    {this.state.msg}
                    <br />
                    <br />
                    {/* <input type="button" value="Focus the text input" onClick={this.focus}/> */}
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="given_name">Given Name:</label>
                        <input type="text" name="given_name" value={this.state.given_name} onChange={this.handleChange.bind(this,'given_name')}/>
                        <label htmlFor="family_name">Family Name:</label>
                        <input type="text" name="family_name" value={this.state.family_name} onChange={this.handleChange.bind(this,'family_name')}/>
                        <button type="submit">Speak</button>
                    </form>
            </div>
        );
    }
}

Skip.PropTypes = {
    family_name:PropTypes.string,
    given_name:PropTypes.string,
    msg:PropTypes.string
}
export default Skip;
