/***
 * 【题目】
 * 给定数组arr和整数num，共返回有多少个子数组满足如下情况：
 * max(arr[i..j]) - min(arr[i..j]) <= num
 * max(arr[i..j])表示子数组arr[i..j]中的最大值，min(arr[i..j])表示子数组arr[i..j]中的最小值，
 * 【要求】
 * 如果数组长度为N,请实现时间复杂度为O(N)的解法。
 * **/
function getNum(arr, num) {
    let
        i = 0, // 子数组左边界下标
        j = 0, // 子数组右边界下标
        res = 0, // 满足条件的子数组数
        qmax = [], // 窗口最大值
        qmin = []; // 窗口最小值
    while (i < arr.length) {
        while (j < arr.length) {
            if (qmin.length === 0 || qmin[qmin.length - 1] !== j) {
                while (qmin.length !== 0 && arr[qmin[qmin.length - 1]] >= arr[j]) {
                    qmin.pop();
                }
                qmin.push(j);
                while (qmax.length !== 0 && arr[qmax[qmax.length - 1]] <= arr[j]) {
                    qmax.pop();
                }
                qmax.push(j);
            }
            if (arr[qmax[0]] - arr[qmin[0]] > num) {
                break;
            }
            j++;
        }
        res += j - i;
        if (qmin[0] === i) {
            qmin.shift();
        }
        if (qmax[0] === i) {
            qmax.shift();
        }
        i++;
    }
    return res;
}

console.log(getNum([1, 2, 3, 4, 5], 2));
