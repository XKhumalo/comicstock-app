import * as types from '../actions/actionTypes'

const initialState = {
    issues: [{title: '', description: '', thumbnail: {image: 'https://dummyimage.com/250x400/dddddd/000000.png&text=image'}}],
    isLoading: false,
    hasErrored: false,
    currentIssue: 0,
}

export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_ISSUES_SUCCESS:
            return Object.assign({}, state, {
                issues: action.issues
            });
        case types.LOAD_ISSUES_HAS_ERRORED:
            return Object.assign({}, state, {
                hasErrored: action.hasErrored
            });
        case types.LOAD_ISSUES_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        case types.CHANGE_MAIN_ISSUE:
            return Object.assign({}, state, {
                currentIssue: action.issueNo
            });
        default:
            return state
    }
}

