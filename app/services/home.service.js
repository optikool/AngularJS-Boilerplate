export default class HomeService {
    constructor($http) {
        this.$http = $http; // For later use
    }
    getImageCollection() {
        return [{
            name: 'image 1',
            link: 'http://www.optikool.com/image.jpg',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
        }, {
            name: 'image 2',
            link: 'http://www.optikool.com/image.jpg',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
        }, {
            name: 'image 3',
            link: 'http://www.optikool.com/image.jpg',
            descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
        }]
    }
}

HomeService.$inject = ['$http'];