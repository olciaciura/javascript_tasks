/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for ( i = 0; i < matrix.length; i ++){
        for ( j = i + 1; j < matrix[0].length; j ++ ){
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    matrix.forEach(row => row.reverse())
    // console.log(matrix)
};

var matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)