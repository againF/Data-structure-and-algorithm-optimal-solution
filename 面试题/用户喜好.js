function query(originArr, queryArr) {
    /* 遍历次数为右边界 - 左边界 + 1；从左边界开始，
    如果左边界 > 右边界遍历停止
    if(originArr[queryArr[0] - 1] === queryArr[2]) {
        result++;
    }
    */
   let
        result = 0,
        l = queryArr[0],
        r = queryArr[1],
        k = queryArr[2];
    while (l <= r) {
        if(originArr[l - 1] === k) {
            result++;
        }
        l++;
    }
    return result;
}
function customerLike(str) {
    let arg = []
    str.trim().split('\n').forEach(function(v, i) {
        arg[i] = v;
      })
    let rest = arg.splice(3)
    for(let i = 0;i < arg[2];i++) {
        console.log(query(arg[1], rest[i]))
    }
}
/*
为了不断优化推荐效果，今日头条每天要存储和处理海量数据。
假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，
我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。
因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。

输入描述:
输入： 第1行为n代表用户的个数 第2行为n个整数，第i个代表用户标号为i的用户对某类文章的喜好度 
第3行为一个正整数q代表查询的组数  第4行到第（3+q）行，每行包含3个整数l,r,k代表一组查询，
即标号为l<=i<=r的用户中对这类文章喜好值为k的用户的个数。 数据范围n <= 300000,q<=300000 k是整型

输出描述:
输出：一共q行，每行一个整数代表喜好值为k的用户的个数

输入例子1:
5
1 2 3 3 5
3
1 2 1
2 4 5
3 5 3

输出例子1:
1
0
2

例子说明1:
样例解释:
有5个用户，喜好值为分别为1、2、3、3、5，
第一组询问对于标号[1,2]的用户喜好值为1的用户的个数是1
第二组询问对于标号[2,4]的用户喜好值为5的用户的个数是0
第三组询问对于标号[3,5]的用户喜好值为3的用户的个数是2
*/