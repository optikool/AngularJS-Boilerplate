export default class HttpService {
    constructor($http) {
        this.http = $http;
        this.request = {};
    }

    getImageCollection() {
        this.request = {
            method: 'GET',
            url: '/rest/imageList.json',
            responseType: 'json',
            cache: true
        };

        return this.http.get(this.request.url, this.request);
    }
}

HttpService.$inject = ['$http'];