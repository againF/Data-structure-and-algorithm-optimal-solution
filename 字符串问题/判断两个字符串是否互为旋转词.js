/*
【题目】
如果一个字符串为str，把str前面任意部分挪到后面形成的字符串叫作str的旋转词。比如str="12345",str的旋转词有"12345"、"23451"、"34512"、"45123"、"51234"。给定两个字符串a和b，请判断a和b是否互为旋转词。
【举例】
a="cdab",b="abcd",return true。
a="1ab2",b="ab12",return false。
a="2ab1",b="ab12",return true。
【要求】
如果a和b长度不一样，那么a和b必然不互为旋转词，可以直接返回false。当a和b长度一样，都为N时，要求解法的时间复杂度为O(N)
*/
function isRotation(str1, str2) {
    if (str1 === null || str2 === null || str1.length !== str2.length) {
        return false;
    } else {
        const str = str2 + str2;
        if (str.indexOf(str1) !== -1) {
            return true;
        } else {
            return false;
        }
    }
}
let result = isRotation("cdab", "abcd")
let result2 = isRotation("1ab2", "ab12")
let result3 = isRotation("2ab1", "ab12")
result
result2
result3