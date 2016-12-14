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
            function hasDuplicates(array) {
                var valuesSoFar = [];
                for (var i = 0; i < array.length; ++i) {
                    var value = array[i];
                    if (valuesSoFar.indexOf(value) !== -1) {
                        return true;
                    }
                    valuesSoFar.push(value);
                }
                return false;
            }
            //Act
            var whiteBalls = lottoService.generateUniqueWhiteBalls();

            //Assert
            expect(hasDuplicates(whiteBalls)).toBeFalsy();
        });

        it('should have its elements sorted in ascending order', function () {
            //Arrange
            function isSorted(array) {
                for (var i = 0; i < array.length-1; i++) {
                    if (array[i] > array[i + 1])
                        return false;
                }
                return true;
            }

            //Act
            var whiteBalls = lottoService.generateUniqueWhiteBalls();

            //Assert
            expect(isSorted(whiteBalls)).toBeTruthy();
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

        it('should add an element to an array', function() {
            //Arrange
            var picks = [];

            //Act
            lottoService.addNewPick(picks);

            //Assert
            expect(picks.length).toEqual(1);
        });

        it('should add a pick with a valid index and all ball numbers being null', function () {
            //Arrange
            var picks = [];

            //Act
            lottoService.addNewPick(picks);

            //Assert
            expect(picks[0].index).not.toBeNull();

            expect(picks[0].w1).toBeNull();
            expect(picks[0].w2).toBeNull();
            expect(picks[0].w3).toBeNull();
            expect(picks[0].w4).toBeNull();
            expect(picks[0].w5).toBeNull();
            expect(picks[0].pb).toBeNull();
        });
    });

    describe('removePick()', function () {

        it('should remove the last element from an array', function () {
            //Arrange
            var picks = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: 7, w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];

            //Act
            lottoService.removePick(picks);

            //Assert
            expect(picks.length).toEqual(1);
            expect(picks[1]).toBeUndefined();

            expect(picks[0].w1).toEqual(1);
        });
    });

    describe('checkForWinningNumbers()', function () {

        it('', function () {
            //Arrange
            //Act
            //Assert
        });
    });

});