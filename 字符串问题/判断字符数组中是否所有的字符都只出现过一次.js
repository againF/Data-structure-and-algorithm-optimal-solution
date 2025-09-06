/***
 * 【题目】
 * 给定一个字符数组chas[]，判断字符数组chas中是否所有的字符都只出现过一次
 * 【举例】
 * chas = ['a', 'b', 'c']，返回true
 * chas = ['a', 'b', 'a']，返回false
 * **/
function isUniquel(chas) {
    if(chas === null) {
        return false;
    }
    let map = {};
    for(let i = 0; i < chas.length; i++) {
        if(map.hasOwnProperty(chas[i])) {
            return false;
        }
        map[chas[i]] = true;
    }
    return true;
}

// test
let chas1 = ['a', 'b', 'c'];
let chas2 = ['a', 'b', 'a'];
console.log(isUniquel(chas1));
console.log(isUniquel(chas2));