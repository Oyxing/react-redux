import React from 'react';
//BrowserRouter  去掉 /#/  HashRouter 常规的
// import { Router,route,browserHistory} from 'react-router'
import { Route,BrowserRouter,Switch} from 'react-router-dom'
import { App, Home, UserListApp, UserDetailApp, Skip,CsStoreApp} from '../containers'

const routes = (
    <BrowserRouter>
        <div>
            <App></App>
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route exact path="/users" component={ UserListApp }></Route>
                <Route path="/users/:id" component={ UserDetailApp }></Route>
                <Route path="/skip" component={ Skip }></Route>
                <Route path="/csstore" component={ CsStoreApp }></Route>
                <Route path="/home" component={ Home }></Route>
            </Switch>
        </div>
    </BrowserRouter>
)
export default routes