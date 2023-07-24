/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    var profit  = 0
    var min = prices[0]
    var max = prices[1];

    for( i = 1; i < prices.length; i++){
        console.log(`profit:${profit}, min:${min}, max:${max}\n`)
        if(prices[i] < max || prices[i] < min){
            profit = profit + Math.max(max - min, 0)
            min = prices[i];
            max = 0;
        }
        else if(prices[i] > max){
            max = prices[i];
        }
    }
    profit = profit + Math.max(max - min, 0)
    return profit
};

var prices = [4,2,1,7]
console.log(maxProfit(prices))