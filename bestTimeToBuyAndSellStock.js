/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit  = 0
    var min = prices[0]

    prices.forEach(price => {min = Math.min(min, price); profit = Math.max(profit, price - min)})
    return profit
};

var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))