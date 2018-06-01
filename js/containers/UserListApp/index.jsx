import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../../actions/user'
import * as csstoreAction from '../../actions/csstore'
import axios from 'axios'
import { UserList } from '../../components'
import store from "../../store";
class UserListApp extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount() {
        console.log('UserList')
        console.log(store.getState().csstore)
        const { actions } = this.props
        axios.get('/mook/users.json').then((ret)=>{
            if(ret.status == 200){
                actions.setUser(ret.data)
            }
        })
    }
    render(){
        return (
            <div>
                <UserList usersById={this.props.usersById}/>
            </div>
        )
    }
}
//  调用两次 1-初始化  2-赋值
const mapStateToProps = state =>{
    return {
        users: state.user.users,
        usersById: state.user.usersById
    }
}
//Redux中的bindActionCreators(组件相关的方法,dispatch)，是通过dispatch将action包裹起来，
// 这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）。
// 初始化 actinos 内部方程 用来调用 
//  使用之前 actions:{}   使用之后 引入组件的方程付给它 actions:{setgetUser(),setUser()}
const mapDispatcToProps = (dispatch) => (
    {
    actions: bindActionCreators(userAction,dispatch)
})

export default connect(mapStateToProps,mapDispatcToProps)(UserListApp)