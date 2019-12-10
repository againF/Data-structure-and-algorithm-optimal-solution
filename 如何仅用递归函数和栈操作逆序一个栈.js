/***
 * 【题目】
 * 一个栈依次压入1、2、3、4、5，那么从栈顶到栈底分别为5、4、3、2、1。将这个栈转置后，从栈顶到栈底为1、2、3、4、5，
 * 也就是实现栈中元素的逆序，但是只能用递归函数来实现，不能用其他数据结构。
 * **/

/***
 * 递归函数，将栈底元素返回并移除
 * **/
function getAndRemoveLastElement(stack) {
    let result = stack.pop();
    if(stack.length === 0) {
        return result;
    }else {
        let last = getAndRemoveLastElement(stack);
        stack.push(result)
        return last;
    }
}


function reverse(stack) {
    if(stack.length === 0) {
        return;
    }
    let last = getAndRemoveLastElement(stack);
    reverse(stack);
    stack.push(last);
}
let a = [1,2,3,4,5]
 reverse(a)
 console.log(a);
 