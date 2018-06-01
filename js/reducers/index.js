import { combineReducers } from 'redux'
import user from './user'
import csstore from './csstore'


const reducers = {
    user,csstore
};
export default combineReducers({
    ...reducers
})

