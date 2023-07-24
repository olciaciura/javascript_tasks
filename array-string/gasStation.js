/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if( gas.length == 1)
        return gas[0] >= cost[0] ? 0 : -1

    var balance = Array()
    
    for(i = 0; i < gas.length; i++) {
        balance.push(gas[i] - cost[i])
    }

    var sum = 0
    for ( const bal of balance) sum += bal

    if( sum < 0) return -1

    var temp = gas[0];
    var a = 0;
    var index = 1;

    while(true) {
        console.log(`temp: ${temp}, a: ${a}, index: ${index}`)
        if (temp - cost[((index - 1) + gas.length)%gas.length] < 0){
            a = index 
            temp = gas[index]
        }
        else{
            temp = temp + gas[index] - cost[((index - 1) + gas.length)%gas.length]
        }
        console.log(` 2: temp: ${temp}, a: ${a}, index: ${index}`)
        if(a == (index + 1)%gas.length && temp - cost[index] >= 0) return a
        index = (index + 1)%gas.length       
    }
};

var gas = [5]
var cost = [3]
console.log(canCompleteCircuit(gas, cost))