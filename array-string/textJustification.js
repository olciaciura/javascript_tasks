/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var justified = []
    var row = []
    var row_len = 0

    words.forEach(word => {
        if(row_len + row.length + word.length > maxWidth){
            row.push(row_len)
            justified.push(justifyLine(row, maxWidth))
            row = []
            row_len = 0
        }
        row.push(word)
        row_len += word.length
    })
    justified.push(justifyLine([row.join(' ')], maxWidth))

    return justified
};

var justifyLine = function(row, maxWidth) {
    if( row.length <= 2) return row[0] + ' '.repeat(maxWidth - row[0].length) 

    var spaces = maxWidth - row.pop()
    var avg_spaces = Math.floor(spaces / (row.length - 1))
    var longer_spaces = spaces % (row.length - 1)
    var line = row.shift()
    line = row.reduce((prev, word) => {
        longer_spaces--
        if (longer_spaces >= 0){
            return prev + ' '.repeat(avg_spaces + 1) + word
        }
        return prev + ' '.repeat(avg_spaces) + word
    }, line)
    return line
}


var words = ["What","must","be","acknowledgment","shall","be"]
var maxWidth = 16
console.log(fullJustify(words, maxWidth))