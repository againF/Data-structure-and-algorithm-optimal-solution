/***
 * 【题目】
 * 编写一个类，用两个栈实现队列，支持队列的基本操作（add,poll,peek)
 * **/
function TwoStacksQueue() {
    this.pushStack = [];
    this.popStack = [];
}

TwoStacksQueue.prototype.pushToPopStack = function () {
    if (this.popStack.length === 0) {
        while (!(this.pushStack.length === 0)) {
            this.popStack.push(this.pushStack.pop())
        }
    }
}

TwoStacksQueue.prototype.add = function (item) {
    this.pushStack.push(item);
    this.pushToPopStack();
}

TwoStacksQueue.prototype.poll = function () {
    if (this.pushStack.length === 0 && this.popStack.length === 0) {
        console.log('队列空了');
    } else {
        this.pushToPopStack();
        return this.popStack.pop();
    }
}

TwoStacksQueue.prototype.peek = function () {
    if (this.pushStack.length === 0 && this.popStack.length === 0) {
        console.log('队列空了');
    } else {
        this.pushToPopStack();
        return this.popStack[this.popStack.length - 1];
    }
}
let myQueue = new TwoStacksQueue();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);
myQueue.add(5);

console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
console.log(myQueue.poll());
console.log(myQueue);
