describe('lottoSim', function () {
    var ngModule, modName = 'lottoSim';

    beforeEach(function () {
        module(modName);
        ngModule = angular.module(modName);
    });

    it("should be registered", function () {
        expect(ngModule).toBeDefined();
    });

    describe("Dependencies", function () {

        var hasDependencyOn = function (name) {
            return ngModule.value(modName).requires.indexOf(name) >= 0;
        }

        //it("should require ui.bootstrap", function () {
        //    expect(hasDependencyOn('ui.bootstrap')).toEqual(true);
        //});

        //it("should require ngGrid", function () {
        //    expect(hasDependencyOn('ngGrid')).toEqual(true);
        //});

    });

});