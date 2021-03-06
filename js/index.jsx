import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from "./store";
import routes from './routes'

let rootElement = document.getElementById('app')

render (
        <Provider store={store}>
            { routes }
        </Provider>
,rootElement)