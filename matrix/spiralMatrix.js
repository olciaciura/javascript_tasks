/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    var top_row = 0
    var bot_row = matrix.length
    var left_col = -1
    var right_col = matrix[0].length

    var list = []
    var i = 0
    var j = 0

    while(list.length < matrix.length*matrix[0].length){
        if (i == top_row){
            while (j < right_col && list.length < matrix.length*matrix[0].length){
                list.push(matrix[i][j])
                j ++
            }
            j -- 
            i ++
            right_col = j
            console.log(`1: list: ${list}, i = ${i}, j = ${j}`)
        }
        
        
        if (j == right_col){
            while (i < bot_row && list.length < matrix.length*matrix[0].length){
                list.push(matrix[i][j])
                i ++
            }
            i --
            j --
            bot_row = i
            console.log(`2: list: ${list}, i = ${i}, j = ${j}`)
        }
        

        if (i == bot_row){
            while (j > left_col && list.length < matrix.length*matrix[0].length){
                list.push(matrix[i][j])
                j --
            }
            j ++
            i --
            left_col = j
            console.log(`3: list: ${list}, i = ${i}, j = ${j}`)
        }
        

        if (j == left_col){
            while(i > top_row && list.length < matrix.length*matrix[0].length){
                list.push(matrix[i][j])
                i --
            }
            i ++
            j ++
            top_row = i
            console.log(`4: list: ${list}, i = ${i}, j = ${j}`)
        }
        
    }
    return list
};

var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix))

