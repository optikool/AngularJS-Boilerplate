export default class HomeService {
    constructor($http) {
        this.$http = $http; // For later use
    }
    getImageCollection() {
        return [{
                name: 'image 1',
                link: '/images/image_01.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 2',
                link: '/images/image_02.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 3',
                link: '/images/image_03.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            },
            {
                name: 'image 4',
                link: '/images/image_04.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 5',
                link: '/images/image_05.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 6',
                link: '/images/image_06.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            },
            {
                name: 'image 7',
                link: '/images/image_07.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 8',
                link: '/images/image_08.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 9',
                link: '/images/image_09.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            },
            {
                name: 'image 10',
                link: '/images/image_10.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 11',
                link: '/images/image_11.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 12',
                link: '/images/image_12.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            },
            {
                name: 'image 13',
                link: '/images/image_13.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 14',
                link: '/images/image_14.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 15',
                link: '/images/image_15.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            },
            {
                name: 'image 16',
                link: '/images/image_16.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 17',
                link: '/images/image_17.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 18',
                link: '/images/image_18.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 19',
                link: '/images/image_19.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }, {
                name: 'image 20',
                link: '/images/image_20.jpg',
                descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
            }
        ]
    }
}

HomeService.$inject = ['$http'];