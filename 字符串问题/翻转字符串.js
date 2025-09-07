/***
 * 【题目】
 * 给定一个字符类型的数组chas，请在单词间做逆序调整。只要做到单词的顺序逆序即可，对空格的位置没有特别要求。
 * 【举例】
 * 如果chas="dog loves pig"，调整后为"pig loves dog"
 *  如果chas="I'm a student."，调整后为"student. a I'm"
 * 补充问题：
 * 给定一个字符类型的数组chas，和一个整数size，请把大小为size的左半区整体移到右半区，右半区整体移到左半区。
 * 【举例】
 * “ABCDE”，size=3
 * 调整为“DEABC”
 * 【要求】
 * 如果chas的长度为N，时间复杂度达到O(N)，额外空间复杂度达到O(1)
 * **/

/***
 * 原题
 * **/
function reverse(chas, l, r) {
    let temp = "";
    while(l < r) {
        temp = chas[l];
        chas[l] = chas[r];
        chas[r] = temp;
        l++;
        r--;
    }
}
function rotateWord(chas) {
    if(chas === null || chas.length === 0) {
        return;
    }
    reverse(chas, 0, chas.length - 1);
    let l = -1;
    let r = -1;
    for(let i = 0; i < chas.length; i++){
        if(chas[i] !== ' '){
            l = i === 0 || chas[i - 1] === ' ' ? i : l;
            r = i === chas.length - 1 || chas[i + 1] === " " ? i : r;
        }
        if(l !== -1 && r !== -1){
            reverse(chas, l, r);
            l = -1;
            r = -1;
        }
    }
    return chas.join('');
}
// test
let chas = "dog loves pig".split('');
let res = rotateWord(chas)
console.log(res)

