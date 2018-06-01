import * as types from '../../constants/ActionTypes';
export function setCsstore(data){
    return {
        type: types.SET_CSSTORE,
        data: data
    }
}