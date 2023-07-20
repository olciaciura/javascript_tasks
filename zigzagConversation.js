/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var y = 0
    desc = false

    if(numRows == 1 || numRows > s.length) return s

    return Array.from(s).map((char, index) => {
        char = [char, y]
        if( !desc) {
            y++
        }
        else{
            y--
        }

        if( y == 0) desc = false
        if(y == numRows - 1) desc = true

        return char
    }).sort(function(a, b) {return a[1] - b[1]})
        .map(item => item[0])
        .join('')
};

var s = "PAYPALISHIRING"
var numRows = 3
console.log(convert(s, numRows));