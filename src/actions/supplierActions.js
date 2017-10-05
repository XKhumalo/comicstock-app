import supplierApi from '../api/SupplierApi';
import * as types from './actionTypes';

export function loadSuppliersSuccess(suppliers) {
    return {type: types.LOAD_SUPPLIERS_SUCCESS, suppliers}
}

export function loadSuppliers() {
    return function(dispatch) {
        return supplierApi.getSuppliers().then(suppliers => {
            dispatch(loadSuppliersSuccess(suppliers));
        }).catch(error => {
            throw(error);
        });
    };
}