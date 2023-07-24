/**
 * @param {number[]} citations
 * @return {number}
 */

//METHODS 1
var hIndex = function(citations) {
    citations.sort(function (a, b) {return a - b})
    var i = 0;
    while(citations[i] < citations.length - i){
        i++;
    }
    return citations.length - i
};

var citations = [4, 1, 2]
console.log(hIndex(citations));