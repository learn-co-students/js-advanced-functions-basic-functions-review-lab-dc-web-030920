// Your code here


function saturdayFun(activity="roller-skate"){
    return "This Saturday, I want to "+ activity + "!" 

}

let mondayWork = function(activity="go to the office"){
    return "This Monday, I will " + activity + "." 
}

function wrapAdjective(x="*"){
    return function(param="special"){
        return "You are " + x + param + x + "!"
    }
}

let Calculator = {
    add(x,y){return x+y},
    subtract(x,y){return x-y },
    multiply(x,y){return x*y},
    divide(x,y){return x/y}
}

function actionApplyer(intgr, arr){
    if(arr.length == 0){return intgr} else {
        let a = arr[0](intgr)
        let b = arr[1](a)
        let c = arr[2](b)
      return c
    }
}