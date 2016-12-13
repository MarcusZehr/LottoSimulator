app.service("lottoService", [ function() {

    var generateUniqueWhiteBallsFn = function()
    {
        return _shuffle(_availablewhiteBallNumbers, 5).sort(function (a, b) { return a - b });
    };
    
    var generatePowerBallFn = function () {
        var ballNumber = _RandomNumberFn(26);
        return ballNumber;
    };

    var addNewPickFn = function(picks) {
        var pickNumber = picks.length;
        picks.push({ index: pickNumber, w1: null, w2: null, w3: null, w4: null, w5: null, pb: null });
        // Automatically scroll to the bottom of #playerPicks when a new pick is added
        $('#playerPicks').animate({ scrollTop: $('#playerPicks').prop("scrollHeight") }, 500);
    }

    var removePickFn = function (picks) {
        var lastItem = picks.length - 1;
        picks.splice(lastItem);
    }

    var checkForWinningNumbersFn = function(picks, draws) {
        for (var i = 0; i < picks.length; i++) {
            for (var j = 0; j < picks[i].length; i++) {
                console.log(picks[i].length);
            }
        };
    };

    //#region Private Methods
    var _RandomNumberFn = function (max) {
        return Math.floor(Math.random() * (max)) + 1;
    };

    var _availablewhiteBallNumbers = [];
    for (var i = 0; i < 69; i++) {
        _availablewhiteBallNumbers[i] = i + 1;
    };

    //Modified Fisher-Yates Shuffle
    function _shuffle(array, numberOfPicks) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        var newArrayLength = numberOfPicks;
        var newArray = [];

        // While there remain elements to shuffle...
        while (numberOfPicks !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            numberOfPicks -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        //console.log(array + "\n");
        for (var i = newArrayLength; i > 0; i--) {
            newArray.push(array[array.length - i]);
        }
        //console.log(newArray);
        return newArray;
    }
    //#endregion

    return {
        generateUniqueWhiteBalls    : generateUniqueWhiteBallsFn,
        generatePowerBall           : generatePowerBallFn,
        addNewPick                  : addNewPickFn,
        removePick                  : removePickFn,
        checkForWinningNumbers      : checkForWinningNumbersFn
    }

}]);