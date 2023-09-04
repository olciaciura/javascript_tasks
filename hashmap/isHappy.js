var isHappy = function(n) {
    var arr = new Map();
    while (n != 1 && !arr.has(n)){
        arr.set(n, true)
        let temp = n
        n = 0
        while(temp != 0){
            n += (temp%10)**2
            temp = Math.floor(temp/10)
        }
    }
    if (n == 1) return true
    return false
};

var n = 19
console.log(isHappy(n))