export default class HomeService {
    constructor(httpService) {
        this.httpService = httpService;
    }

    getRandomNumber(count) {
        return Math.floor(Math.random() * Math.floor(count));
    }
}

HomeService.$inject = ['httpService'];