var input_var = document.getElementById('input');

function getNumber(num){
  input_var = document.getElementById('input');
  switch (num) {
    case 1:
      input_var.value += '1';
      break;
    case 2:
      input_var.value += '2';
      break;
    case 3:
      input_var.value += '3';
      break;
    case 4:
      input_var.value += '4';
      break;
    case 5:
      input_var.value += '5';
      break;
    case 6:
      input_var.value += '6';
      break;
    case 7:
      input_var.value += '7';
      break;
    case 8:
      input_var.value += '8';
      break;
    case 9:
      input_var.value += '9';
      break;
    case 0:
      input_var.value += '0';
      break;
    default:
      input_var.value += ".";
      break;
  }
  var num1 = input_var.value;
}

console.log(num1); 


//get the mathematical operation

function getOperand(operand){
  //console.log(input_var.value);
  if (input_var.value == null) {
    input_var.value += "Error";
  }
  else {
    document.getElementById('input').value = '';
    var input_var1 = document.getElementById('input');
  }
}

//clear the screen

function clearScreen(){
  document.getElementById('input').value = '';
}
