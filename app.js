// // inserting numbers
// var inputField = document.getElementById("input");
// function valueSender(number) {
//     if (inputField.value === answer){
//         inputField.value = ""
//     }
//         inputField.value += number;
        
// }
// // inserting number completed
// function operatorSender(operator) {
//     inputField.value += operator;


//     //detecting for two operators at a time 

//     if (["/", "x", "+", "-", "%"].includes(inputField.value.charAt(inputField.value.length - 2)) && ["/", "x", "+", "-", "%"].includes(inputField.value.charAt(inputField.value.length - 1))) {

//         inputField.value = inputField.value.slice(0, -2) + inputField.value.slice(-1);
       
//     }

//     //detecting for two operators at a time complete 


//     //detectinng starting operators
//     else if (["/", "x", "+", "-", "%"].includes(inputField.value.charAt(0))){
//         inputField.value = "";
//     }
//     //detectinng starting operators complete

   

// }
// function equals() {
//     var numbersBeforeOperator = null;
//     var numberAfterOperator = null;
//     var answer = null;
//     var result = inputField.value.split("");
//     for (var i = 0; i <  inputField.value.length; i++) {
//         if (result[i] === "+" ){
//             numbersBeforeOperator = result.slice(0, i).join("");
//             numberAfterOperator = result.slice(i + 1).join("");
//             answer = Number(numbersBeforeOperator) + Number(numberAfterOperator);
//             inputField.value = answer
//             // console.log(numbersBeforeOperator + result[i] + numberAfterOperator)
//             // if (inputField.value){
//             //     inputField.value = ""
//             //     var tempResultWindow = document.querySelector('.tempResultWindow');
//             //     var inputWithOperator = numbersBeforeOperator + result[i] + numberAfterOperator;
//             //     tempResultWindow.textContent = inputWithOperator;    
//             // }
//             // function operatorSender (operator) {
//             //     var tempResultWindow = document.querySelector('.tempResultWindow');
//             //     var inputWithOperator = Number(numbersBeforeOperator) + result[i] + Number(numberAfterOperator);
//             //     tempResultWindow.textContent = inputWithOperator;
//             // }
//         } 
//     }
//     inputField.value = answer;
    
    
//     // var tempResultWindow = document.querySelector('.tempResultWindow');
// }


// // clear functions

// function ClearAll() {
//     inputField.value = "";
//     // var tempResultWindow = document.querySelector('.tempResultWindow');

//     // tempResultWindow.textContent = "";
// }
// function dltLastNumber() {
//     inputField.value = inputField.value.slice(0, -1)
// } 

// // clear  functions completed



// inserting numbers
var inputField = document.getElementById("input");
var hasResult = false;

function valueSender(number) {
  if (hasResult) {
    inputField.value = "";
    hasResult = false;
  }
  inputField.value += number;
}

// inserting number completed
function operatorSender(operator) {
  if (hasResult) {
    hasResult = false;
  }
  
  //detecting for two operators at a time 
  if (inputField.value.length > 0 && ["+", "-", "x", "/", "%"].includes(inputField.value.slice(-1))) {
    inputField.value = inputField.value.slice(0, -1) + operator;
  }
  //detecting starting operators
  else if (inputField.value.length === 0 && ["-", "+", "*", "/", "%"].includes(operator)) {
    inputField.value = "";
  }
  else {
    inputField.value += operator;
  }
}

function equals() {
  var result = inputField.value;
  try {
    result = eval(inputField.value);
  } catch (e) {
    result = "Error";
  }
  inputField.value = result;
  hasResult = true;
}

// clear functions
function ClearAll() {
  inputField.value = "";
  hasResult = false;
}

function dltLastNumber() {
  inputField.value = inputField.value.slice(0, -1);
}

// clear functions completed
