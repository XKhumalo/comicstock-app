import * as types from '../actions/actionTypes'

const initialState = {
    suppliers: [],
}

export default function supplierReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_SUPPLIERS_SUCCESS:
            return Object.assign({}, state, {
                suppliers: action.suppliers
            });



        default:
            return state;
    }
}