/***
 * 【题目】
 *给定一个整型矩阵map，其中的值只有0和1两种，求其中全是1的所有矩形区域中，最大的矩形区域为1的数量。
 例如：
 1 1 1 0
 其中，最大的矩形区域有3个1，所以返回3。
 再如：
 1 0 1 1
 1 1 1 1
 1 1 1 0
 其中，最大的矩形区域有6个1，所以返回6。
 
 * **/
function getMax(height) {
    if (height.length === 0) {
        return 0;
    }
    let singleStack = [];
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        while (singleStack.length !== 0 && height[i] <= height[singleStack[singleStack.length - 1]]) {
            let popIndex = singleStack.pop();
            let leftIndex = singleStack.length === 0 ? -1 : singleStack[singleStack.length - 1];
            let curArea = height[popIndex] * (i - leftIndex - 1);
            maxArea = Math.max(maxArea, curArea);
        }
        singleStack.push(i);
    }
    while (singleStack.length !== 0) {
        let popIndex = singleStack.pop();
        let leftIndex = singleStack.length === 0 ? -1 : singleStack[singleStack.length - 1];
        let curArea = height[popIndex] * (height.length - leftIndex - 1);
        maxArea = Math.max(maxArea, curArea);
    }
    return maxArea;
}
function getMaxArea(map) {
    let height = new Array(map[0].length).fill(0); // 这里如果初始化的时候不用0填充，后面height[j] = map[i][j] === 0 ? 0 : (height[j] + 1)就会有问题，因为height[0]是undefined
    let maxArea = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            height[j] = map[i][j] === 0 ? 0 : (height[j] + 1);
        }
        maxArea = Math.max(getMax(height), maxArea)
    }
    return maxArea;
}
console.log(getMaxArea([[1, 0, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]]));
