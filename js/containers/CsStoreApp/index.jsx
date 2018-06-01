import React, { Component } from 'react';
import axios from 'axios'
import store from "../../store";
import { CsStore } from '../../components'
class CsStoreApp extends Component {

    componentWillMount() {
        console.log('CsStoreApp')
        console.log(store.getState().csstore)
        
        var actions = []
        axios.get('/mook/csstore.json').then((ret)=>{
            actions = ret.data.msg
            store.dispatch({type:"SET_CSSTORE",data:actions})
        })
    }
    render() {
        
        return (
            <div>
                <CsStore />
            </div>
        );
    }
}

export default CsStoreApp;
