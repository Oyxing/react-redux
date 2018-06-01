import React, { Component } from 'react';
import store from "../../store";
class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('Home')
        console.log(store.getState().csstore)
    }
    skip (){
        this.props.history.push('/skip')
    }
    render() {
        return (
            <div>
                Home
                <button onClick={this.skip.bind(this)}>跳转</button>
            </div>
        );
    }
}


export default Home;
