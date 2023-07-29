/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++){
            board[i][j] = checkIndividual(board, i, j)
        }
    }

    for(i = 0; i < board.length; i++) {
        for(j = 0; j < board[i].length; j++){
            if( board[i][j] > 1)
            board[i][j] = 3 - board[i][j] 
        }
    }




    console.log(board)
};

var checkIndividual = function(board, x, y){
    count = 0;
    if ( x > 0 && y > 0 ) count += board[x - 1][y - 1] % 2                                      // up - left
    if ( x > 0 ) count += board[x - 1][y] % 2                                                   // up
    if ( x > 0 && y < board[0].length - 1 ) count += board[x - 1][y + 1] % 2                    // up - right
    if ( y > 0 ) count += board[x][y - 1] % 2                                                   // left
    if ( y < board[0].length - 1 ) count += board[x][y + 1] % 2                                 // right
    if ( x < board.length - 1 && y > 0 ) count += board[x + 1][y - 1] % 2                       // down - left
    if ( x < board.length - 1 ) count += board[x + 1][y] % 2                                    // down
    if ( x < board.length - 1 && y < board[0].length - 1 ) count += board[x + 1][y + 1] % 2     // down - right
    
    if ( board[x][y] == 0 && count == 3 ) return 2
    if ( board[x][y] == 1 && count < 2 ) return 3
    if ( board[x][y] == 1 && count > 3 ) return 3
    if ( board[x][y] == 1 ) return 1
    return 0
}

var board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
gameOfLife(board)