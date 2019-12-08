/***
 * 【题目】实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返回栈中最小元素的操作。
 * 【要求】
 * 1. pop,push,getMin操作的时间复杂度都是O(1)。
 * 2. 设计的栈类型可以使用现成的栈结构。
 * **/
/***
 * 解法一
 * **/
function MyStack() {
    this.stackData = [];
    this.stackMin = [];
}
MyStack.prototype.push = function(newItem) {
    this.stackData.push(newItem);
    if(this.stackMin.length === 0 || newItem <= this.stackMin[this.stackMin.length -1]) {
        this.stackMin.push(newItem);
    }else {
        return;
    }
}

MyStack.prototype.pop = function() {
    if(this.stackData.length === 0) {
        console.log('栈空了没东西可以出栈');
        return;
    }else {
        let value = this.stackData.pop();
        if(value === this.stackMin[this.stackMin.length -1]) {
            this.stackMin.pop();
        }
        return value;
    }
}

MyStack.prototype.getMin = function() {
    if(this.stackMin.length === 0) {
        console.log('栈空了没东西可以出栈');
        return;
    }else {
        return this.stackMin[this.stackMin.length - 1];
    }
}

// let myStack = new MyStack();
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// myStack.push(1);
// myStack.push(2);
// myStack.push(1);
// console.log(myStack);
// myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());
// myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());


// let stackData = [];
// let stackMin = [];

// function push(newItem) {
//     stackData.push(newItem);
//     if(stackMin.length === 0 || newItem <= stackMin[stackMin.length -1]) {
//         stackMin.push(newItem);
//     }else {
//         return;
//     }
// }

// function pop() {
//     if(stackData.length === 0) {
//         console.log('栈空了没东西可以出栈');
//         return;
//     }else {
//         let value = stackData.pop();
//         if(value === stackMin[stackMin.length -1]) {
//             stackMin.pop();
//         }
//         return value;
//     }
    
// }

// function getMin() {
//     if(stackMin.length === 0) {
//         console.log('栈空了没东西可以出栈');
        
//     }else {
//         return stackMin[stackMin.length - 1];
//     }
// }

// push(3)
// push(4)
// push(5)
// push(1)
// push(2)
// push(1)
// console.log(stackData);
// console.log(stackMin);
// console.log(getMin())
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);
// pop()
// console.log(getMin())
// console.log(stackData);
// console.log(stackMin);

/***
 * 解法2
 * **/
function MyStack2() {
    this.stackData = [];
    this.stackMin = [];
}
MyStack2.prototype.push = function(newItem) {
    this.stackData.push(newItem);
    if(this.stackMin.length === 0 || newItem <= this.stackMin[this.stackMin.length - 1]) {
        this.stackMin.push(newItem);
    }else {
        this.stackMin.push(this.stackMin[this.stackMin.length -1]);
    }
}
MyStack2.prototype.pop = function() {
    let value = this.stackData.pop();
    this.stackMin.pop();
    return value;
}
MyStack2.prototype.getMin = function() {
    return this.stackMin[this.stackMin.length -1]
}
// let myStack = new MyStack2();
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// myStack.push(1);
// myStack.push(2);
// myStack.push(1);
// console.log(myStack);
// myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());
// myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());myStack.pop()
// console.log(myStack);
// console.log(myStack.getMin());