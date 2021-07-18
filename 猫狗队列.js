// 宠物、狗和猫的构造函数如下：
// 宠物
function Pet(type) {
    this.type = type; // 宠物类型
}
Pet.prototype.getPetType = function() {
    return this.type;
}

// 猫
function Cat() {
    Pet.call(this, "cat");
}
Cat.prototype = new Pet();
Cat.prototype.constructor = Cat;

// 狗
function Dog() {
    Pet.call(this, "dog");
}
Dog.prototype = new Pet();
Dog.prototype.constructor = Dog;
/***
 * 实现一种猫狗队列的结构，要求如下：
用户可以调用add方法将cat类或者dog类的实例放入队列中；
用户可以调用pollAll方法，将队列中所有的实例按照进队列的先后顺序依次弹出；
用户可以调用pollDog方法，将队列中dog类的实例按照进队列的先后顺序依次弹出；
用户可以调用pollCat方法，将队列中cat类的实例按照进队列的先后顺序依次弹出；
用户可以调用isEmpty方法，检查队列中是否还有dog和cat的实例；
用户可以调用isDogEmpty方法，检查队列中是否还有dog的实例；
用户可以调用isCatEmpty方法，检查队列中是否还有cat的实例；
 * **/

//解法
function PetEnterQueue(pet, count) {
    this.pet = pet;
    this.count = count;
}
PetEnterQueue.prototype.getPet = function() {
    return this.pet;
}

PetEnterQueue.prototype.getCount = function() {
    return this.count;
}

PetEnterQueue.prototype.getEnterPetType = function() {
    return this.pet.getPetType();
}

function DogCatQueue() {
    this.dogQ = [];
    this.catQ = [];
    this.count = 0;
}
DogCatQueue.prototype.add = function(pet) {
    if(pet.getPetType === "dog") {
        this.dogQ.push(new PetEnterQueue(pet, this.count++));
    }else if(pet.getPetType === "cat") {
        this.catQ.push(new PetEnterQueue(pet, this.count++));
    }else {
        throw new Error("err, not dog or cat");
    }
}

DogCatQueue.prototype.pollAll = function() {
    if(this.dogQ.length > 0 && this.catQ.length > 0) {
        // 猫狗队列都不为空，比较两个队列队头时间戳，谁早弹谁
        if(this.dogQ[0].getCount() < this.catQ[0].getCount()) {
            return this.dogQ.shift().getPet();
        }else {
            return this.catQ.shift().getPet();
        }
    }else if(this.dogQ.length > 0) {
        return this.dogQ.shift().getPet();
    }
    else if(this.catQ.length > 0) {
        return this.catQ.shift().getPet();
    }else {
        throw new Error("err, queue if empty");
    }
}

DogCatQueue.prototype.pollDog = function() {
    if(this.dogQ.length > 0) {
        return this.dogQ.shift().getPet();
    }else {
        throw new Error("err, dog queue is empty");
    }
}

DogCatQueue.prototype.pollCat = function() {
    if(this.catQ.length > 0) {
        return this.catQ.shift().getPet();
    }else {
        throw new Error("err, cat queue is empty");
    }
}

DogCatQueue.prototype.isEmpty = function() {
    return this.catQ.length === 0 && this.dogQ.length === 0;
}

DogCatQueue.prototype.isDogEmpty = function() {
    return  this.dogQ.length === 0;
}

DogCatQueue.prototype.iscatEmpty = function() {
    return this.catQ.length === 0;
}