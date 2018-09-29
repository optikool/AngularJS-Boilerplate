export default class HomeService {
  constructor($http) {
    this.$http = $http
  }
  getImageCollection() {
    return [
      {
        name: 'image 1',
        link: 'http://www.optikool.com/image.jpg',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
      },{
        name: 'image 2',
        link: 'http://www.optikool.com/image.jpg',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
      },{
        name: 'image 3',
        link: 'http://www.optikool.com/image.jpg',
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ligula est, et ullamcorper purus varius nec.'
      }
    ]
    //return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json');
  }
}