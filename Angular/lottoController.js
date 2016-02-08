app.controller("lottoController", ['$scope', 'lottoService', 'CostPerTicket', function ($scope, lottoService, CostPerTicket) {

    $scope.picks = [{ index: 0, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null },
                    { index: 1, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null },
                    { index: 2, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null },
                    { index: 3, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null },
                    { index: 4, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null }];

    $scope.draws = [{ index: 0, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null }];

    $scope.totalSpent = 0;
    $scope.totalWon = 0;
    
    //todo: manipulate drawCost based on $scope.picks.length * CostPerTicket with using $scope inside functions
    $scope.drawCost = 0;

    $scope.initialize = function() {
        $scope.drawCost = $scope.picks.length * CostPerTicket;
    };

    $scope.addNewPick = function (picks) {
        lottoService.addNewPick(picks);
        $scope.drawCost = $scope.picks.length * CostPerTicket;
    };

    $scope.removePick = function (picks) {
        lottoService.removePick(picks);
        $scope.drawCost = $scope.picks.length * CostPerTicket;
    };

    $scope.generateRandomLottoNumber = function (pick) {
        var _uniqueRandomNumbers = lottoService.generateUniqueWhiteBalls();

        pick.w1 = _uniqueRandomNumbers[0];
        pick.w2 = _uniqueRandomNumbers[1];
        pick.w3 = _uniqueRandomNumbers[2];
        pick.w4 = _uniqueRandomNumbers[3];
        pick.w5 = _uniqueRandomNumbers[4];

        pick.pb     = lottoService.generatePowerBall();
    };

    $scope.shuffleAll = function(picks) {
        for (var i = 0; i < picks.length; i++) {
            var _uniqueRandomNumbers = lottoService.generateUniqueWhiteBalls();

            picks[i].w1 = _uniqueRandomNumbers[0];
            picks[i].w2 = _uniqueRandomNumbers[1];
            picks[i].w3 = _uniqueRandomNumbers[2];
            picks[i].w4 = _uniqueRandomNumbers[3];
            picks[i].w5 = _uniqueRandomNumbers[4];

            picks[i].pb = lottoService.generatePowerBall();
        }

        for (x in picks) {
            if (picks.hasOwnProperty(x)) {
                console.log(x + " -> (" + picks[x].w1 + ", " + picks[x].w2 + ", " + picks[x].w3 + ", " + picks[x].w4 + ", " + picks[x].w5 + ", " + picks[x].pb + ")");
            }
        }
    };

    $scope.drawNumbers = function (draw) {

        for (var i = 0; i < draw.length; i++) {
            var _uniqueRandomNumbers = lottoService.generateUniqueWhiteBalls();

            draw[i].w1 = _uniqueRandomNumbers[0];
            draw[i].w2 = _uniqueRandomNumbers[1];
            draw[i].w3 = _uniqueRandomNumbers[2];
            draw[i].w4 = _uniqueRandomNumbers[3];
            draw[i].w5 = _uniqueRandomNumbers[4];

            draw[i].pb = lottoService.generatePowerBall();
        }

        for (x in draw) {
            if (draw.hasOwnProperty(x)) {
                console.log(x + " -> (" + draw[x].w1 + ", " + draw[x].w2 + ", " + draw[x].w3 + ", " + draw[x].w4 + ", " + draw[x].w5 + ", " + draw[x].pb + ")");
            }
        }

        ////Prepare for numerous draws
        //var drawnNumber = ($scope.draws.length == null ? 0 : 0);
        //$scope.draws[0] = { index: drawnNumber, w1: draw.w1, w2: draw.w2, w3: draw.w3, w4: draw.w4, w5: draw.w5, pb: draw.pb };

    };

    //#region Validation
    $scope.picksAreInvalid = function (picks) {
        var invalidValuesExist = false;
        for (var i = 0; i < picks.length; i++) {
            if (nullValuesExist(picks[i]))
                invalidValuesExist = true;
        }
        return invalidValuesExist;
    }

    var nullValuesExist = function (pick) {
        if ((pick.w1 == null || pick.w1 == "") ||
            (pick.w2 == null || pick.w2 == "") ||
            (pick.w3 == null || pick.w3 == "") ||
            (pick.w4 == null || pick.w4 == "") ||
            (pick.w5 == null || pick.w5 == "") ||
            (pick.pb == null || pick.pb == ""))
            return true;
        return false;
    }
    //#endregion

}]);