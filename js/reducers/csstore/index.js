import * as types from '../../constants/ActionTypes';

const initialState ={
   
}
export default function csstore (state = initialState, action){
    switch (action.type) {
        case types.SET_CSSTORE:
            return {
                ...state,
               csstore:action.data,
            }
        default:
            return state
    }
}