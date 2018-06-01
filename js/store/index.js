import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'
const composedCreateStroe = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)(createStore)

function configureStore(initialState = {}){
    const store = composedCreateStroe(reducers,initialState)
    if(process.env.NOOE_ENV === 'development' && module.hot){
        module.hot.accept('../reducers',() => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer);
        })
    }
    return store
}

let store = configureStore()
export default store;