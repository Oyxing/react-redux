import React, { Component } from 'react'
import { browserHistory } from 'react-router'  //引入路由函数


class UserDetail extends Component {
   
    componentDidMount(){
        console.log(this)
    }
    render() {
       const { paramsid } = this.props
        return (
            <h2>
                <p>详情id:  {paramsid}</p>
                
            </h2>
        )
    }
}
export default UserDetail