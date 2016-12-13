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

    it('generatePowerBall() to create a number between 1 and 26', function () {
        //Arrange
        //Act
        var powerBall = lottoService.generatePowerBall();

        //Assert
        expect(powerBall).not.toBeUndefined();
        expect(powerBall).toBeGreaterThan(0);
        expect(powerBall).toBeLessThan(27);
    });
});