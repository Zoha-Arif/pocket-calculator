var input_var = document.getElementById('input');
var num01;
var executed = false;
var num02;
var evalStringArray = [];
var commas = [];
var lengthin = 0;
var indy = 0;

function getNumber(num){
  input_var = document.getElementById('input');
  switch (num) {
    case 1:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '1';
      evalStringArray.push('1');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 2:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '2';
      evalStringArray.push('2');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 3:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '3';
      evalStringArray.push('3');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 4:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '4';
      evalStringArray.push('4');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 5:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '5';
      evalStringArray.push('5');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 6:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '6';
      evalStringArray.push('6');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 7:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '7';
      evalStringArray.push('7');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 8:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '8';
      evalStringArray.push('8');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 9:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '9';
      evalStringArray.push('9');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    case 0:
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (lengthin <= 11) {
      input_var.value += '0';
      evalStringArray.push('0');
      if (input_var.value.includes(".") == false){
      if (lengthin > 3) {
        if (lengthin == 4) {
          commas = [];
          for (var h = 0; h < input_var.value.length; h++){
            if (input_var.value[h] != ",") {
              var value = input_var.value[h];
              commas.push(value);
            }
          }
          if (indy == 1) {
            commas.splice(2, 0, ",");
            indy = 0;
          }
          else {
            commas.splice(1, 0, ",");
          }
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem4;
        }
        else if (lengthin == 6) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1) {
            commas2.splice(3, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
          }
          /*copy the above if else statement to every single line of code pls.*/
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 7) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 8) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          else {
            commas2.splice(1, 0, ",");
            commas2.splice(5, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 10) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          else {
            commas2.splice(2, 0, ",");
            commas2.splice(6, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
        else if (lengthin == 11) {
          commas2 = [];
          for (var g = 0; g < input_var.value.length; g++){
            if (input_var.value[g] == ",") {
            }
            else {
              var value = input_var.value[g];
              commas2.push(value);
            }

          }
          if (indy == 1){
            commas2.splice(4, 0, ",");
            commas2.splice(8, 0, ",");
          }
          else {
            commas2.splice(3, 0, ",");
            commas2.splice(7, 0, ",");
          }
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          input_var.value = '';
          input_var.value = problem5;
        }
      }
      }
    }
      break;
    default:
      if (input_var.value.length <= 10) {
        if (!input_var.value.includes('.')){
          input_var.value += ".";
          evalStringArray.push('.');
        }
      }
      break;
    }

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
          j = 1;
          z = 0;
        }

        else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "/")) {
          evalStringArray.splice(j, 1);
          //evalStringArray.splice(z, 1)
          j = 1;
          z = 0;
        }

        else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "*")) {
          evalStringArray.splice(j, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }

        else {
          z++;
          j++;
        }
      }

      var problem = evalStringArray.join('');
      problem = problem.replace(/ +/g, ' ');
      console.log(problem);
      var evaluation = eval(problem);
      input_ans.value = evaluation;

      if (input_ans.value.length > 3) {
        //make an array. add comma to array. make it the output.
        if (input_ans.value.length == 4) {
          commas = [];
          for (var h = 0; h < input_ans.value.length; h++){
            if (input_ans.value[h] != ",") {
              var value = input_ans.value[h];
              commas.push(value);
            }
          }
          commas.splice(1, 0, ",");
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_ans.value = '';
          input_ans.value = problem4;
          console.log("commas4:");
          console.log(commas);
        }
        else if (input_ans.value.length == 5) {
          commas2 = [];
          for (var g = 0; g < input_ans.value.length; g++){
            if (input_ans.value[g] == ",") {
            }
            else {
              var value = input_ans.value[g];
              commas2.push(value);
            }

          }
          commas2.splice(2, 0, ",");
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          console.log("commas6:");
          console.log(commas2);
          console.log("working!");
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (input_ans.value.length == 6) {
          commas2 = [];
          for (var g = 0; g < input_ans.value.length; g++){
            if (input_ans.value[g] == ",") {
            }
            else {
              var value = input_ans.value[g];
              commas2.push(value);
            }

          }
          commas2.splice(3, 0, ",");
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          console.log("commas7:");
          console.log(commas2);
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (input_ans.value.length == 7) {
          commas2 = [];
          for (var g = 0; g < input_ans.value.length; g++){
            if (input_ans.value[g] == ",") {
            }
            else {
              var value = input_ans.value[g];
              commas2.push(value);
            }

          }
          commas2.splice(1, 0, ",");
          commas2.splice(5, 0, ",");
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          console.log("commas8:");
          console.log(commas2);
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (input_ans.value.length == 8) {
          commas2 = [];
          for (var g = 0; g < input_ans.value.length; g++){
            if (input_ans.value[g] == ",") {
            }
            else {
              var value = input_ans.value[g];
              commas2.push(value);
            }

          }
          commas2.splice(2, 0, ",");
          commas2.splice(6, 0, ",");
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          console.log("commas10:");
          console.log(commas2);
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (input_ans.value.length == 9) {
          commas2 = [];
          for (var g = 0; g < input_ans.value.length; g++){
            if (input_ans.value[g] == ",") {
            }
            else {
              var value = input_ans.value[g];
              commas2.push(value);
            }

          }
          commas2.splice(3, 0, ",");
          commas2.splice(7, 0, ",");
          var problem5 = commas2.join('');
          problem5 = problem5.replace(/ +/g, ' ');
          console.log("commas11:");
          console.log(commas2);
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else {
          var evaluation = eval(problem);
          evaluation = Number(evaluation);
          input_ans.value = evaluation.toExponential();
        }
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
  document.getElementById('input_ans').value = '';
}

function answer(num1, num2, operand){
  console.log(evalStringArray);
  var z = 0;
  for (var j = 1; j < evalStringArray.length;){
    if ((evalStringArray[j] == "+") && (evalStringArray[z] == "+")) {
      evalStringArray.splice(j, 1);
      // evalStringArray.splice(z, 1);
      j = 1;
      z = 0;
    }
    else if ((evalStringArray[j] == "-") && (evalStringArray[z] == "-")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      j = 1;
      z = 0;
    }

    else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "/")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      j = 1;
      z = 0;
    }

    else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "*")) {
      evalStringArray.splice(j, 1);
      //evalStringArray.splice(z, 1);
      j = 1;
      z = 0;
    }

    else {
      z++;
      j++;
    }
  }
  var problem = evalStringArray.join('');
  problem = problem.replace(/ +/g, ' ');
  var evaluation = eval(problem);
  input_var.value = evaluation;
  input_ans.value = "";

  if (input_var.value.length > 3) {
    //make an array. add comma to array. make it the output.
    if (input_var.value.length == 4) {
      commas = [];
      for (var h = 0; h < input_var.value.length; h++){
        if (input_var.value[h] != ",") {
          var value = input_var.value[h];
          commas.push(value);
        }
      }
      commas.splice(1, 0, ",");
      var problem4 = commas.join('');
      problem4 = problem4.replace(/ +/g, ' ');
      input_var.value = '';
      input_var.value = problem4;
    }
    else if (input_var.value.length == 5) {
      commas2 = [];
      for (var g = 0; g < input_var.value.length; g++){
        if (input_var.value[g] == ",") {
        }
        else {
          var value = input_var.value[g];
          commas2.push(value);
        }

      }
      commas2.splice(2, 0, ",");
      var problem5 = commas2.join('');
      problem5 = problem5.replace(/ +/g, ' ');
      console.log(commas2);
      input_var.value = '';
      input_var.value = problem5;
    }
    else if (input_var.value.length == 6) {
      commas2 = [];
      for (var g = 0; g < input_var.value.length; g++){
        if (input_var.value[g] == ",") {
        }
        else {
          var value = input_var.value[g];
          commas2.push(value);
        }

      }
      commas2.splice(3, 0, ",");
      var problem5 = commas2.join('');
      problem5 = problem5.replace(/ +/g, ' ');
      input_var.value = '';
      input_var.value = problem5;
    }
    else if (input_var.value.length == 7) {
      commas2 = [];
      for (var g = 0; g < input_var.value.length; g++){
        if (input_var.value[g] == ",") {
        }
        else {
          var value = input_var.value[g];
          commas2.push(value);
        }

      }
      commas2.splice(1, 0, ",");
      commas2.splice(5, 0, ",");
      var problem5 = commas2.join('');
      problem5 = problem5.replace(/ +/g, ' ');
      input_var.value = '';
      input_var.value = problem5;
    }
    else if (input_var.value.length == 8) {
      commas2 = [];
      for (var g = 0; g < input_var.value.length; g++){
        if (input_var.value[g] == ",") {
        }
        else {
          var value = input_var.value[g];
          commas2.push(value);
        }

      }
      commas2.splice(2, 0, ",");
      commas2.splice(6, 0, ",");
      var problem5 = commas2.join('');
      problem5 = problem5.replace(/ +/g, ' ');
      input_var.value = '';
      input_var.value = problem5;
    }
    else if (input_var.value.length == 9) {
      commas2 = [];
      for (var g = 0; g < input_var.value.length; g++){
        if (input_var.value[g] == ",") {
        }
        else {
          var value = input_var.value[g];
          commas2.push(value);
        }

      }
      commas2.splice(3, 0, ",");
      commas2.splice(7, 0, ",");
      var problem5 = commas2.join('');
      problem5 = problem5.replace(/ +/g, ' ');
      input_var.value = '';
      input_var.value = problem5;
    }
    else {
      var evaluation = eval(problem);
      evaluation = Number(evaluation);
      input_var.value = evaluation.toExponential();
    }
  }

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

  negated_num = [];
  for (var s = 0; s < count; s++){
    var push = evalStringArray[index2];
    negated_num.splice(0, 0, push);
    index2 = index2 - 1;
  }

  var problem1 = negated_num.join('');
  problem1 = problem1.replace(/ +/g, ' ');

  var negnum = problem1 * (-1);

  if (negnum < 0){
    index1 = evalStringArray.length;
    index2 = index1;
    index2 = index2 - count;
    evalStringArray.splice(index2, 0, "-");
    input_var.value = negnum;
    var lengthin2 = 0;
    var indy2 = 0;
    if (input_var.value.includes("-") == true){
      lengthin2 = Number(input_var.value.length) - 1;
      indy2 = 1;
    }
    else {
      lengthin2 = input_var.value.length;
    }
    console.log("lengthin2: " + lengthin2);
    if (lengthin2 > 3) {
      //make an array. add comma to array. make it the output.
      if (lengthin2 == 4) {
        commas = [];
        for (var h = 0; h < input_var.value.length; h++){
          if (input_var.value[h] != ",") {
            var value = input_var.value[h];
            commas.push(value);
          }
        }
        commas.splice(2, 0, ",");
        var problem4 = commas.join('');
        problem4 = problem4.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem4;
      }
      else if (lengthin2 == 5) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(3, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin2 == 6) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(4, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin2 == 7) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(2, 0, ",");
        commas2.splice(6, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin2  == 8) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(3, 0, ",");
        commas2.splice(7, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin2 == 9) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(4, 0, ",");
        commas2.splice(8, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
    }
  }

  else {
    index1 = evalStringArray.length;
    index2 = index1;
    index2 = index2 - count;
    evalStringArray.splice(index2, 1);
    input_var.value = negnum;
    var lengthin1 = 0;
    var indy1 = 0;
    if (input_var.value.includes("-") == true){
      lengthin1 = Number(input_var.value.length);
      indy1 = 1;
    }
    else {
      lengthin1 = input_var.value.length;
    }
    console.log("lengthin1: " + lengthin1);
    if (lengthin1 > 3) {
      //make an array. add comma to array. make it the output.
      if (lengthin1 == 4) {
        commas = [];
        for (var h = 0; h < input_var.value.length; h++){
          if (input_var.value[h] != ",") {
            var value = input_var.value[h];
            commas.push(value);
          }
        }
        commas.splice(1, 0, ",");
        var problem4 = commas.join('');
        problem4 = problem4.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem4;
      }
      else if (lengthin1 == 5) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(2, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin1 == 6) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(3, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin1 == 7) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(1, 0, ",");
        commas2.splice(5, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin1 == 8) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(2, 0, ",");
        commas2.splice(6, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
      else if (lengthin1 == 9) {
        commas2 = [];
        for (var g = 0; g < input_var.value.length; g++){
          if (input_var.value[g] == ",") {
          }
          else {
            var value = input_var.value[g];
            commas2.push(value);
          }

        }
        commas2.splice(3, 0, ",");
        commas2.splice(7, 0, ",");
        var problem5 = commas2.join('');
        problem5 = problem5.replace(/ +/g, ' ');
        input_var.value = '';
        input_var.value = problem5;
      }
    }
  }
}
