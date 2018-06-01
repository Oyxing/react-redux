import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component{
    render(){
        return (
            <div>
                 <ul>
                    <li><Link to="/">App</Link></li> 
                    <li><Link to="/users">Users</Link></li> 
                    <li><Link to="/csstore">CsStore</Link></li> 
                </ul>
            </div>
           
        )
    }
}

export default App