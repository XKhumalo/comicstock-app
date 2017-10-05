import {combineReducers} from 'redux';
import suppliers from './supplierReducer';
import issues from './issueReducer';

const rootReducer = combineReducers({
    suppliers,
    issues
});

export default rootReducer;