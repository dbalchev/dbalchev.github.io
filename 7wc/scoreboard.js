var myApp = angular.module("7wc", []);
myApp.controller("scoreboard", function($scope) {
        $scope.scoreRows = ["war", "money","wonders", "building", "trade", "guides", "science"];
        $scope.scoreNames = {
                "war":"Война",
                "money":"Пари",
                "wonders":"Чудеса",
                "building":"Сгради",
                "trade":"Търговия",
                "guides":"Гилдии",
                "science":"Наука"
        };
        $scope.players= [];
        var total = function() {
                var result = 0;
                for(var score in $scope.scoreRows)
                        result += parseInt(this[$scope.scoreRows[score]], 10) || 0;
                return result;
        }
        $scope.addPlayer = function(name) {
                var newPlayer = {name:name, total:total};
                for(var score in $scope.scoreRows)
                        newPlayer[$scope.scoreRows[score]] = "";
                $scope.players.push(newPlayer);
        };
});
myApp.controller("player-add", function($scope) {
        $scope.newPlayerName = "";
        $scope.addPlayer = function($event) {
                $scope.$parent.addPlayer($scope.newPlayerName);
                $scope.newPlayerName = "";
                $event.preventDefault();
        }
});
