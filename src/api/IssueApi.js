const BASE_URL = 'http://frontendshowcase.azurewebsites.net';

class IssueApi {

    static requestHeaders() {
        return {'AUTHORIZATION': ``}
    }

    static getIssues() {
        const headers = this.requestHeaders();
        const request = new Request(`${BASE_URL}/api/Issues`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {return error});
    }
}

export default IssueApi;