/*
请你实现一个数据结构支持以下操作：

Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。
Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否则使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。
GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串"" 。
GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""。


挑战：

你能够以 O(1) 的时间复杂度实现所有操作吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/all-oone-data-structure
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
var AllOne = function () {

};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    if (key === "") {
        throw new Error("保证 key 不为空字符串")
    }
    if (this.hasOwnProperty(key)) {
        this.key = Number(this.key) + 1;
    } else {
        return;
    }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    if (key === "") {
        throw new Error("保证 key 不为空字符串")
    }
    if (this.hasOwnProperty(key)) {
        if (this.key === 1) {
            delete this.key;
        } else {
            this.key = Number(this.key) - 1;
        }
    } else {
        this.key = 1;
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    let valArr = [];
    for (let k in this) {
        valArr.push(this.k)
    }
    if (valArr.length === 0) {
        return "";
    } else {
        return Math.max(...valArr);
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    let valArr = [];
    for (let k in this) {
        valArr.push(this.k)
    }
    if (valArr.length === 0) {
        return "";
    } else {
        return Math.min(...valArr);
    }
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
