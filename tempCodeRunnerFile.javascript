const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

let stackData = [];
let minData = [];
function push(data){
    stackData.push(data);
    if(minData.length === 0){
        minData.push(data);
    }else {
        let topData = minData[minData.length - 1]
        if(data <= topData){
            minData.push(data)
        }
    }
}
function pop(){
   let popData =  stackData.pop()
    let topData = minData[minData.length - 1]
    if(popData <= topData){
        minData.pop()
    }
}
function getMin(){
    return minData[minData.length - 1];
}
void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        console.log(a + b);
        switch(a){
            case 'push':
                push(parseInt(b))
                break;
            case 'pop':
                pop();
                break;
            case 'getMin':
                getMin();
                break;
        }
    }
}()
