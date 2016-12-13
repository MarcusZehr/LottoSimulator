describe('lottoService', function() {
    var $scope, controller, lottoService;
    var ngModule, modName = 'lottoSim';

    beforeEach(function () {
        module(modName);
        ngModule = angular.module(modName);
    });

    beforeEach(inject(function ($rootScope, $controller, _lottoService_) {
        $scope = $rootScope.$new();
        lottoService = _lottoService_;

        controller = $controller('lottoController', {
            '$scope': $scope,
            'lottoService': _lottoService_
        });

    }));

    describe('generateUniqueWhiteBalls()', function () {

        it('should create an array with a length of 5', function () {
            //Arrange
            //Act
            var whiteBalls = lottoService.generateUniqueWhiteBalls();

            //Assert
            expect(whiteBalls.length).toEqual(5);
        });

        it('should create an array consisting of unique numbers', function () {
            //Arrange
            //Act
            //Assert
        });

        it('should have its elements sorted in ascending order', function () {
            //Arrange
            //Act
            //Assert
        });
    });

    describe('generatePowerBall()', function () {

        it('should generate a number between 1 and 26', function () {
            //Arrange
            //Act
            var powerBall = lottoService.generatePowerBall();

            //Assert
            expect(powerBall).toBeGreaterThan(0);
            expect(powerBall).toBeLessThan(27);
        });
    });

    describe('addNewPick()', function () {

        it('', function() {
            
        });
    });

    describe('removePick()', function () {

        it('', function () {

        });
    });

    describe('checkForWinningNumbers()', function () {

        it('', function () {

        });
    });

    describe('_shuffle', function () {

        it('', function () {

        });
    });
});