/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var s = ''
    
    var dict = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

    var index = 0

    while(num > 0){
        var next_number = Object.keys(dict).sort(function(a, b) {return b - a})[index]
        if(next_number <= num){
            s += dict[next_number]
            num -= next_number
        }
        else{
            index++
        }
    }
    return s
};

var num = 58
console.log(intToRoman(num))