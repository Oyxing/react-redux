import React, { Component } from 'react';
import { UserDetail } from '../../components'
import store from "../../store";
class UserDetailApp extends Component{
    componentWillMount() {
        console.log('UserDetailApp')
        console.log(store.getState().csstore)
    }
    render(){
        return (
            <div>
                <UserDetail paramsid={this.props.match.params.id}/>
            </div>
        )
    }
}

export default UserDetailApp