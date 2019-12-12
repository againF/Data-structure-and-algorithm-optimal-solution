/***
 * 【题目】
 * 一个栈中元素的类型为整型，现在想将该栈从顶到底按从大到小的顺序排序，
 * 只允许申请一个栈。除此之外，可以申请新的变量，但不能申请额外的数据结构。
 * **/
function sortStackByStack(stack) {
    let help = [];
    while(stack.length !== 0) {
        let cur = stack.pop();
        while(help.length !== 0 && cur > help[help.length - 1]) {
            stack.push(help.pop());
        }
        help.push(cur);
    }
    while(help.length !== 0) {
        stack.push(help.pop());
    }
    return stack;
}
console.log(sortStackByStack([1,3,2,4,3,5,1,0,0,-1,3]))