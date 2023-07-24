/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    var counter = {
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
        7 : 0,
        8 : 0,
        9 : 0,
        '.': 0
    }

    for ( let row of board){
        for (let elem of row) {
            if (counter[elem] != 0 && elem != '.') return false;
            counter[elem] ++
        }
        fillingCounterWithZeros(counter) 
    }
    console.log('Every row is valid')

    for ( i = 0; i < 9; i++){
        for (let row of board) {
            if (counter[row[i]] != 0 && row[i] != '.') return false;
            counter[row[i]] ++
        }
        fillingCounterWithZeros(counter) 
    }
    console.log('Every column is valid')
    
    for ( row = 0; row < 3; row ++ ){
        for ( col = 0; col < 3; col ++ ){
            for ( i = 0; i < 3; i ++ ){
                for ( j = 0; j < 3; j ++ ){
                    if (counter[board[ 3 * row + i][ 3 * col + j]] != 0 && board[ 3 * row + i][ 3 * col + j] != '.') return false;
                        counter[board[ 3 * row + i][ 3 * col + j]] ++
                }
            }
            fillingCounterWithZeros(counter)
        }
    }
    console.log('Every little square is valid')

    return true
};

var fillingCounterWithZeros = function(counter) {
    for (let key in counter) {
        counter[key] = 0
    }
}

var board = 
[["5","3","6",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
