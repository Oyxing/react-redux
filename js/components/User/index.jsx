import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class User extends Component {
    render() {
        const {id, name} = this.props
        return (
            <div>
                <h3>{id}</h3>
                {/* {`/users/${id}`}  字符拼接*/}
                <Link to={{ pathname: '/users/'+ id  }}>
                    {name}
                </Link>
                <Link to={{  
                    pathname: '/home',  
                    search: 'name',  
                    hash: '#the-hash',  
                    state: { fromDashboard: true } ,
                    query:{id:1,name:'sda'},
                    }}> 
                    courses
                 </Link>
            </div>
        )
    }
}
export default User