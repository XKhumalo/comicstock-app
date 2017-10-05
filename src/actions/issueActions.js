import * as types from './actionTypes'
import issueApi from '../api/IssueApi';

export function loadIssuesIsLoading(bool) {
    return { type: types.LOAD_ISSUES_IS_LOADING, isLoading: bool }
}
export function loadIssuesSuccess(issues) {
    return { type: types.LOAD_ISSUES_SUCCESS, issues }
}

export function loadIssuesHasErrored(bool) {
    return { type: types.LOAD_ISSUES_HAS_ERRORED, hasErrored: bool }
}

export function changeCurrentIssue(issueNo) {
    return { type: types.CHANGE_MAIN_ISSUE, issueNo }
}

export function loadIssues() {
    return function(dispatch) {
        return issueApi.getIssues().then(issues => {
            dispatch(loadIssuesSuccess(issues));
        }).catch(error => {
            throw(error);
        });
    };
}

export function errorAfterFiveSeconds() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(loadIssuesHasErrored(true));
        }, 5000);
    };
}