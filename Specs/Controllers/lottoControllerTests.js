describe('lottoController', function () {
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

    describe('generateRandomLottoNumber', function() {

        it('should call lottoService to both generate the white balls as well as the powerball', function() {
            //Arrange
            var pick = { index: 0, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null };
            spyOn(lottoService, 'generateUniqueWhiteBalls').and.callThrough();
            spyOn(lottoService, 'generatePowerBall').and.callThrough();

            //Act
            $scope.generateRandomLottoNumber(pick);

            //Assert
            expect(lottoService.generateUniqueWhiteBalls.calls.count()).toEqual(1);
            expect(lottoService.generatePowerBall.calls.count()).toEqual(1);
        });
    });

    describe('shuffleAll', function() {

        it('should randomize every ball value for every pick in the array', function() {
            //Arrange
            var originalPicks = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: 7, w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];
            var picks = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: 7, w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];

            //Act
            $scope.shuffleAll(picks);

            //Assert
            expect(picks.length).toEqual(2);

            for (var i = 0; i < picks.length; i++) {
                expect(picks[i].w1).toBeGreaterThan(0);
                expect(picks[i].w1).toBeLessThan(70);

                expect(picks[i].w2).toBeGreaterThan(0);
                expect(picks[i].w2).toBeLessThan(70);

                expect(picks[i].w3).toBeGreaterThan(0);
                expect(picks[i].w3).toBeLessThan(70);

                expect(picks[i].w4).toBeGreaterThan(0);
                expect(picks[i].w4).toBeLessThan(70);

                expect(picks[i].w5).toBeGreaterThan(0);
                expect(picks[i].w5).toBeLessThan(70);

                expect(picks[i].pb).toBeGreaterThan(0);
                expect(picks[i].pb).toBeLessThan(27);
            }

            expect(picks).not.toEqual(originalPicks);
        });
    });

    describe('picksAreInvalid', function () {

        it('should return false if all picks are valid', function () {
            //Arrange
            var validPickArray = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: 7, w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];

            //Act
            var Case1 = $scope.picksAreInvalid(validPickArray);

            //Assert
            expect(Case1).toEqual(false);
        });

        it('should return true if any pick contains balls which are null or empty', function() {
            //Arrange
            var validPickArrayWithSingleNullPick = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: null, w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];

            var validPickArrayWithSingleEmptyPick = [
                { index: 0, w1: 1, w2: 2, w3: 3, w4: 4, w5: 5, pb: 6 },
                { index: 1, w1: "", w2: 8, w3: 9, w4: 1, w5: 2, pb: 3 }
            ];

            //Act
            var Case1 = $scope.picksAreInvalid(validPickArrayWithSingleNullPick);
            var Case2 = $scope.picksAreInvalid(validPickArrayWithSingleEmptyPick);

            //Assert
            expect(Case1).toEqual(true);
            expect(Case2).toEqual(true);
        });
    });
});