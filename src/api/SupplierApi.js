const BASE_URL = 'http://frontendshowcase.azurewebsites.net';

class SupplierApi {

    static requestHeaders() {
        return {'AUTHORIZATION': ``}
    }

    static getSuppliers() {
        const headers = this.requestHeaders();
        const request = new Request(`${BASE_URL}/api/Suppliers`, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {return error});
    }
}

export default SupplierApi;