export default class HttpService {
    constructor($http) {
        this.http = $http; // For later use
        this.request = {};
    }

    getImageCollection() {
        this.request = {
            method: 'GET',
            url: '/rest/imageList.json',
            responseType: 'json',
            cache: false
        };

        return this.http.get(this.request.url, this.request);
    }
}

HttpService.$inject = ['$http'];