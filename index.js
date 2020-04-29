// Your code here

function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(string="go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(style ="*"){
    return function(string="special"){
        return `You are ${style}${string}${style}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2 },
    subtract: function(num1, num2){
        return num1 - num2 
    },
    multiply: function(num1, num2){
        return num1*num2
    },
    divide: function(num1, num2){
        return num1/num2
    }
}

function actionApplyer(sv, array) {
    let result = sv

   for (let i = 0; i < array.length; i++){
        result = array[i](result)
   }
   return result
}
