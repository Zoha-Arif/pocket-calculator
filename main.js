var input_var = document.getElementById('input');
var num01;
var executed = false;
var num02;
var evalStringArray = [];

function getNumber(num){
  input_var = document.getElementById('input');
  switch (num) {
    case 1:
      input_var.value += '1';
      evalStringArray.push('1');
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
