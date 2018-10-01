class InstructionsController {
    constructor(LOCALE, httpService) {
        'ngInject';

        this.httpService = httpService;
        this.images = [];
        this.locale = LOCALE;
    }

    getImageList() {
        this.httpService.getImageCollection()
            .then(result => {
                console.log('InstructionsController.getImageList result.data): ', result.data);
                this.images = result.data;
            }, error => {
                console.log('Error occured: ', error);
            });
    }

    $onInit() {
        this.getImageList();
    }
}

InstructionsController.$inject = ['LOCALE', 'httpService'];

export default InstructionsController;