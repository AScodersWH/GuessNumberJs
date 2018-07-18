'use strict'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var times = 0;
var results = [];
var inputs = [];
var inputArr = [];
rl.on('line', function (input) {
    inputArr = input.split(" ");
    inputArr.forEach(function (item, index) {
        inputArr[index] = +item;// 转化为数字
    });
    var UserInput = forminput(inputArr);
    var RealNumber = RndNum();
    var res = compare(UserInput, RealNumber);
    if (results != null) {
        for(var ii = 0;ii<times;ii++) {
            console.log("here are your history input :  "+inputs[ii]+",  "+results[ii]);
        }
    }
    results.push(res);
    inputs.push(UserInput);

    inputArr = [];// 清空数组
    times++;
    if (times == 6) {
        console.log("your times have benn used off! you lose!");
        rl.close();
    }
});

function forminput(collection) {

    var flag = true;
    var s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (collection.length != 4) flag = false;
    for (var item of collection) {
        if (s.indexOf(item) == -1) flag = false;
    }
    if (flag) return collection;
    else console.log("Wrong Input，Input again");
}

function RndNum() {
    var rnd = [];
    for (var i = 0; i < 4; i++)
        rnd.push(Math.floor(Math.random() * 10));
    return rnd;
}

function compare(UserInput, RealNumber) {
    var a = 0, b = 0;
    var result = "";

    for (var item of UserInput) {
        if (RealNumber.indexOf(item) >= 0) b++;
    }

    for (var ite = 0; ite < 4; ite++) {
        if (UserInput[ite] == RealNumber[ite]) a++;
    }
    result += a + "A" + b + "B";
    if (a == 4) {
        console.log("win, all correct!");
        rl.close();
    }
    console.log(result);
    return result;
}

