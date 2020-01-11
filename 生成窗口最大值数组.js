/***
 * 【题目】
 * 有一个整形数组arr和一个大小为w的窗口从数组的最左边滑到最右边，窗口每次向右边滑一个位置。
 * 例如，数组[4,3,5,4,3,3,6,7],窗口大小为3时：
 * [4 3 5] 4 3 3 6 7  窗口中最大值为5
 * 4 [3 5 4] 3 3 6 7  窗口中最大值为5
 * 4 3 [5 4 3] 3 6 7  窗口中最大值为5
 * 4 3 5 [4 3 3] 6 7  窗口中最大值为4
 * 4 3 5 4 [3 3 6] 7  窗口中最大值为6
 * 4 3 5 4 3 [3 6 7]  窗口中最大值为7
 * 如果数组长度为n，窗口大小为w，则一共产生n-w+1个窗口的最大值。
 * 请实现一个函数。
 * 输入： 整形数组arr，窗口大小为w。
 * 输出： 一个长度为n-w+1的数组res,res[i]表示每一种窗口状态下的最大值。
 * 以本题为例，结果应返回[5,5,5,4,6,7]
 * **/

 function getMaxWindowValue(arr, w) {
     let 
        res = [],
        qMax = [],
        index = 0;
    for(let i = 0;i < arr.length;i++) {
        while (!(qMax.length === 0) && arr[qMax.length - 1] < arr[i]) {
            qMax.shift();
        }
        qMax.push(i);
        if(qMax[0] === i-w) {
            qMax.shift();
        }
        if(i >= w -1) {
            res[index++] = arr[qMax[0]];
        }
    }
    return res;
 }

 /***
  * 测试
  * **/
let arr = [4,3,5,4,3,3,6,7];
let w = 3;
console.log(getMaxWindowValue(arr,w))