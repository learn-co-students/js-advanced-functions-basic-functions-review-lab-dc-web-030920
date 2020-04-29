// Your code here

function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}

let wrapAdjective = function(param="*"){
    return function inner(string="special") {
        return `You are ${param}${string}${param}!`
    }
}

const Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1-3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10/5}
}

let actionApplyer = function(integer, array) {
    let num = integer
    for (let i = 0; i < array.length; i++) {
        num = array[i](num)
    }
    return num
}