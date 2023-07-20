/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candies = Array(ratings.length).fill(1)

    for( i = 1; i  < ratings.length; i++ ) {
        if( ratings[i] > ratings[i - 1]){
            candies[i] = candies[i - 1] + 1
        }
    }
    var sum = candies[ratings.length - 1];
    for( i = ratings.length - 2; i >= 0; i--){
        if(ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i+1] + 1, candies[i])
        }
        sum += candies[i]
    }
    return sum
};

var ratings = [1,3,4,5,2]
console.log(candy(ratings))