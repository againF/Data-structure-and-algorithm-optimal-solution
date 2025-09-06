// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s === null || s === undefined || s === "") {
        return 0
    }
    let map = {}
    let len = 0;
    let pre = -1
    let cur = 0
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            pre = Math.max(pre, map[s[i]])
        }
        cur = i - pre;
        len = Math.max(len, cur)
        map[s[i]] = i;
    }
    return len;
};