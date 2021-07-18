/***
 * 【题目】
 * 给定一个不含有重复值的数组arr，找到每一个i位置左边和右边离i位置最近且值比arr[i]小的位置。返回所有位置相应的信息。
 * 【举例】
 * arr = {3,4,1,5,6,2,7}
 * 返回如下二维数组作为结果：
 * {
 *    {-1, 2},
 *    { 0, 2},
 *    {-1,-1},
 *    { 2, 5},
 *    { 3, 5},
 *    { 2,-1},
 *    { 5,-1}
 * }
 * -1表示不存在。所以上面的结果表示在arr中，
 * 0位置左边和右边离0位置最近且值比arr[0]小的位置是-1和2；
 * 1位置左边和右边离1位置最近且值比arr[1]小的位置是0和2；
 * 2位置左边和右边离2位置最近且值比arr[2]小的位置是-1和-1······
 * 进阶问题：
 * 给定一个可能含有重复值的数组arr，找到每一个i位置左边和右边离i位置最近且值比arr[i]小的位置。返回所有位置相应的信息。
 * 【要求】
 * 如果arr长度为N，实现原问题和进阶问题的解法，时间复杂度都达到O(N)。
 * 【举例】
 * arr = {3, 1, 3, 4, 3, 5, 3, 2, 2}
 * 返回如下二维数组作为结果：
 * {
 *    {-1,-1},
 *    {-1,-1},
 *    { 1, 7},
 *    { 2, 4},
 *    { 1, 7},
 *    { 4, 6},
 *    { 1, 7}
 *    { 1,-1}
 *    { 1,-1}
 * }
 * **/
function getNearNoRepeat(arr) {
    let res = []; // 返回结果二维数组
    let singleStack = []; // 单调栈
    for (let i = 0; i < arr.length; i++) {
        while (singleStack.length !== 0 && arr[i] < arr[singleStack[singleStack.length - 1]]) {
            let popIndex = singleStack.pop();
            let leftIndex = singleStack.length === 0 ? -1 : singleStack[singleStack.length - 1];
            res[popIndex] = [leftIndex, i]
        }
        singleStack.push(i);
    }
    while (singleStack.length !== 0) {
        let popIndex = singleStack.pop();
        let leftIndex = singleStack.length === 0 ? -1 : singleStack[singleStack.length - 1];
        res[popIndex] = [leftIndex, -1]
    }
    return res;
}

// console.log(getNearNoRepeat([3, 4, 1, 5, 6, 2, 7]))

// 进阶问题
function getNearRepeat(arr) {
    let res = []; // 返回结果二维数组
    let singleStack = []; // 单调栈
    for (let i = 0; i < arr.length; i++) {
        while (singleStack.length !== 0 && arr[i] < arr[singleStack[singleStack.length - 1][0]]) {
            let popIndex = singleStack.pop();
            let singleStackPeek = singleStack[singleStack.length - 1];
            let leftIndex = singleStack.length === 0 ? -1 : singleStackPeek[singleStackPeek.length - 1];
            for (let j = 0; j < popIndex.length; j++) {
                res[popIndex[j]] = [leftIndex, i];
            }
        }
        if (singleStack.length === 0 || arr[i] > arr[singleStack[singleStack.length - 1][0]]) {
            singleStack.push([i]);
        } else if (arr[i] === arr[singleStack[singleStack.length - 1][0]]) {
            let stackTop = singleStack.pop();
            stackTop.push(i);
            singleStack.push(stackTop);
        }
    }
    while (singleStack.length !== 0) {
        let popIndex = singleStack.pop();
        let singleStackPeek = singleStack[singleStack.length - 1];
        let leftIndex = singleStack.length === 0 ? -1 : singleStackPeek[singleStackPeek.length - 1];
        for (let i = 0; i < popIndex.length; i++) {
            res[popIndex[i]] = [leftIndex, -1];
        }
    }
    return res;
}
console.log(getNearRepeat([3, 1, 3, 4, 3, 5, 3, 2, 2]))
