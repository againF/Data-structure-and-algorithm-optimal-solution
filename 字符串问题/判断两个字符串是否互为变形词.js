/*
【题目】
给定两个字符串str1和str2，如果str1和str2中出现的字符种类一样且每种字符出现的次数也一样，那么str1和str2互为变形词。请实现函数判断两个字符串是否互为变形词。
【举例】
str1="123",str2="231",return true.
str1="123",str2="2331",return false.
*/
function isDeformation(str1, str2) {
    if (str1 === null || str2 === null || str1.length !== str2.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < str1.length; i++) {
        if (map.hasOwnProperty(str1.charAt(i))) {
            map[str1.charAt(i)]++
        } else {
            map[str1.charAt(i)] = 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        if (map.hasOwnProperty(str2.charAt(j))) {
            map[str2.charAt(j)]--;
            if (map[str2.charAt(j)] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
let result = isDeformation("11 2 ", "1  21")
console.log('result: ', result);
