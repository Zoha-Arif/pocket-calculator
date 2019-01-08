var input_var = document.getElementById('input');
var num01;
var executed = false;
var num02;
var evalStringArray = [];
var commas = [];

function getNumber(num){
  input_var = document.getElementById('input');
  switch (num) {
    case 1:
      input_var.value += '1';
      evalStringArray.push('1');
      if (input_var.value.length > 3) {
        //make an array. add comma to array. make it the output.
        if (input_var.value.length == 4) {
          for (var h = 0; h < input_var.value.length; h++){
            var value = input_var.value[h];
            commas.push(value);
          }
          commas.splice(1, 0, ",");
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = problem4;
        }
      }
      break;
    case 2:
      input_var.value += '2';
        evalStringArray.push('2');
      break;
    case 3:
      input_var.value += '3';
      evalStringArray.push('3');
      break;
    case 4:
      input_var.value += '4';
      evalStringArray.push('4');
      break;
    case 5:
      input_var.value += '5';
      evalStringArray.push('5');
      break;
    case 6:
      input_var.value += '6';
      evalStringArray.push('6');
      break;
    case 7:
      input_var.value += '7';
      evalStringArray.push('7');
      break;
    case 8:
      input_var.value += '8';
      evalStringArray.push('8');
      break;
    case 9:
      input_var.value += '9';
      evalStringArray.push('9');
      break;
    case 0:
      input_var.value += '0';
      evalStringArray.push('0');
      break;
    default:
      if (!input_var.value.includes('.')){
        input_var.value += ".";
        evalStringArray.push('.');
      }
      break;
  }

  /* if (!executed){
    num01 = input_var.value;
    return num01;
    executed = true;
  }

  else {
    num02 = input_var.value;
    return num02;
  } */
}
//get the mathematical operation
var operand1;
function getOperand(operand){
  document.getElementById('input').value = '';
  //console.log(input_var.value);
  //if (getNumber() == null) {
  //  var input_var2 = document.getElementById('input');
  ///  input_var2.value += "Error";
//  }
  //else {
    //document.getElementById('input').value = '';
    //var input_var1 = document.getElementById('input');
    switch (operand) {
      case '+':
        operand1 = '+';
        evalStringArray.push('+');
        break;
      case '-':
        operand1 = '-';
        evalStringArray.push('-');
        break;
      case '/':
        operand1 = '/';
        evalStringArray.push('/');
        break;
      case '*':
        operand1 = '*';
        evalStringArray.push('*');
        break;
      default:
        operand1 = 'z';
        break;
  //}
}
  return operand1;
}
//clear the screen

function clearScreen(){
  document.getElementById('input').value = '';
  evalStringArray = [];
}

function answer(num1, num2, operand){
  console.log(evalStringArray);
  var z = 0;
  for (var j = 1; j < evalStringArray.length;){
    if ((evalStringArray[j] == "+") && (evalStringArray[z] == "+")) {
      evalStringArray.splice(j, 1);
      // evalStringArray.splice(z, 1);
      console.log("j:");
      console.log(j);
      console.log("z:");
      console.log(z);
      console.log(evalStringArray);
      j = 1;
      z = 0;
    }
    else if ((evalStringArray[j] == "-") && (evalStringArray[z] == "-")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      console.log("j:");
      console.log(j);
      console.log("z:");
      console.log(z);
      console.log(evalStringArray);
      j = 1;
      z = 0;
    }

    else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "/")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      console.log("j:");
      console.log(j);
      console.log("z:");
      console.log(z);
      console.log(evalStringArray);
      j = 1;
      z = 0;
    }

    else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "*")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      console.log("j:");
      console.log(j);
      console.log("z:");
      console.log(z);
      console.log(evalStringArray);
      j = 1;
      z = 0;
    }

    else {
      console.log("j:");
      console.log(j);
      console.log("z:");
      console.log(z);
      console.log(evalStringArray);
      z++;
      j++;
    }
  }
console.log(evalStringArray);
  var problem = evalStringArray.join('');
  problem = problem.replace(/ +/g, ' ');
  console.log(problem);
  var evaluation = eval(problem);
  input_var.value = evaluation;
  evalStringArray = [];
  /*
  var num1 = num01;
  console.log(num1);
  var operand = operand1;
  console.log(operand);
  var num2 = num02;
  console.log(num2);*/
}

function Negation(){
  var index1 = evalStringArray.length;
  var index2 = index1 - 1;
  var count = 1;
  var sign = false;

  for(var i = index2; i != 0; i--){
    if (evalStringArray[i] == "*") {
      sign = true;
    }
    else if (evalStringArray[i] == "/") {
      sign = true;
    }
    else if (evalStringArray[i] == "-") {
      sign = true;
    }
    else if (evalStringArray[i] == "+") {
      sign = true;
    }
    else if (sign == false) {
        count = count + 1;
    }
  }

  console.log("final count:");
  console.log(count);
  console.log("index2:");
  console.log(index2);

  negated_num = [];
  for (var s = 0; s < count; s++){
    var push = evalStringArray[index2];
    negated_num.splice(0, 0, push);
    index2 = index2 - 1;
  }

  var problem1 = negated_num.join('');
  problem1 = problem1.replace(/ +/g, ' ');
  console.log("number:");
  console.log(problem1);
  console.log(negated_num);

  var negnum = problem1 * (-1);
  console.log("neg:");
  console.log(negnum);

  if (negnum < 0){
    index1 = evalStringArray.length;
    index2 = index1;
    index2 = index2 - count;
    evalStringArray.splice(index2, 0, "-");
    console.log(evalStringArray);
    input_var.value = negnum;
  }

  else {
    index1 = evalStringArray.length;
    index2 = index1;
    index2 = index2 - count;
    evalStringArray.splice(index2, 1);
    console.log(evalStringArray);
    input_var.value = negnum
  }
}
