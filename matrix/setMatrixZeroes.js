/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  
    var row = 0
    var columns = []
    
    while (row < matrix.length) {
        var col = 0
        var to_fill = false
        while (col < matrix[0].length){
            if (matrix[row][col] == 0){
                to_fill = true
                columns.push(col)
            }
            col ++
        }
        if (to_fill) matrix[row].fill(0)
        row += 1
    }

    for( i = 0; i < matrix.length; i++){
        for ( var j of columns){
            matrix[i][j] = 0
        }
    }
};

var matrix = [[3,4,5,2],[1,3,1,5], [0,1,2,0]]
setZeroes(matrix)