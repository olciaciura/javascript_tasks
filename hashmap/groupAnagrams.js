var groupAnagrams = function(strs) {
    let map = new Map()

    strs.forEach(word => {
        let key = word.split("").sort().join("")

        if (map.has(key)) {
            let arr = map.get(key)
            arr.push(word)
            map.set(key, arr)
        }
        else{ 
            map.set(key, [word]);
        }

    });
    
    var str = Array.from(map, ([ _ , value]) => value) 
    return str
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))