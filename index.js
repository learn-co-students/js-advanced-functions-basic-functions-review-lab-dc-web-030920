// Your code here

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

// LAB: Implement a function called saturdayFun. It should return a String like 
// "This Saturday, I want to ....!" Fill in the ... with the activity that's passed 
// in as the first parameter. If nothing is passed in, default to "roller-skate". 
// Use the learn program to verify you've gotten a working implementation. Come 
// back here once you've gotten just this set of tests passing.

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

// LAB: Implement a function called mondayWork. It should return a String like "This Monday, 
// I will ... ." Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office". Use the learn program to verify 
// you've gotten a working implementation. Come back here once you've gotten just this set of 
// tests passing.

function wrapAdjective(string="*"){
        function result(param="special"){
            return `You are ${string}${param}${string}!`
        }
        return result
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }

//   let actionApplyer = function(start, ray) {
//     let a = start
  
//     for (let i = 0; i < ray.length; i++ ){
//       a = ray[i](a)
//     }
  
//     return a
//   }

function actionApplyer(start, ray){
    let first = start
    
    for (let i = 0; i < ray.length; i++ ){
        first = ray[i](first)
    }
    
    return first
}