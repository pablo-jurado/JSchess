/* global angular */

var chess = angular.module('chess', []);

chess.controller('chessController', function($scope) {
  $scope.board = createBoard(8, 8);
});

function createBoard(row, col) {
  var arr = [];
  for (var i = 0; i < row; i++) {
    var rowArr = [];
    for (var j = 0; j < col; j++) {
      var value = true;
      if (i % 2 === 0) value = !value;
      if (j % 2 === 0) value = !value;
      rowArr.push({ piece: null, background: value });
    }
    arr.push(rowArr);
  }
  return arr;
}
