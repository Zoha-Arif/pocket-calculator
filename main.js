var input_var = document.getElementById('input');
var num01;
var executed = false;
var num02;
var evalStringArray = [];
var commas = [];
var lengthin = 0;
var indy = 0;
var zero = 0;

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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".1");
        evalStringArray.push('1');
      }
      else {
        input_var.value += '1';
        evalStringArray.push('1');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".2");
        evalStringArray.push('2');
      }
      else {
        input_var.value += '2';
        evalStringArray.push('2');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".3");
        evalStringArray.push('3');
      }
      else {
        input_var.value += '3';
        evalStringArray.push('3');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".4");
        evalStringArray.push('4');
      }
      else {
        input_var.value += '4';
        evalStringArray.push('4');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".5");
        evalStringArray.push('5');
      }
      else {
        input_var.value += '5';
        evalStringArray.push('5');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".6");
        evalStringArray.push('6');
      }
      else {
        input_var.value += '6';
        evalStringArray.push('6');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".7");
        evalStringArray.push('7');
      }
      else {
        input_var.value += '7';
        evalStringArray.push('7');
      }
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
    if (input_var.value.length < "11"){
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".8");
        evalStringArray.push('8');
      }
      else {
        input_var.value += '8';
        evalStringArray.push('8');
      }
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
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0") && (zero == 0)) {
        input_var.value = input_var.value.replace(".0", ".9");
        evalStringArray.push('9');
      }
      else {
        input_var.value += '9';
        evalStringArray.push('9');
      }
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
    zero = 1;
    indy = 0;
    lengthin = 0;
    if (input_var.value.includes("-") == true){
      lengthin = Number(input_var.value.length);
      indy = 1;
    }
    else {
      lengthin = input_var.value.length + 1;
    }
    if (input_var.value.length < "11") {
      if (input_var.value.includes(".0")) {
        input_var.value = input_var.value.replace(".0", ".0");
        evalStringArray.push('0');
      }
      else {
        input_var.value += '0';
        evalStringArray.push('0');
      }
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
      if (input_var.value.length < "11") {
        if (!input_var.value.includes('.')){
          if(input_var.value == ''){
            input_var.value += "0.0";
            evalStringArray.push('0.');
          }
          else {
            input_var.value += ".0";
            evalStringArray.push('.');
          }
        }
      }
      break;
    }

      var z = 0;
      for (var j = 1; j < evalStringArray.length;){
        console.log("evalStringArray: " + evalStringArray);
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
        else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "-")) {
          evalStringArray.splice(z, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }
        else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "*")) {
          evalStringArray.splice(z, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }
        else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "/")) {
          evalStringArray.splice(z, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }
        else if ((evalStringArray[j] == "-") && (evalStringArray[z] == "+")) {
          evalStringArray.splice(z, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }
        else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "+")) {
          evalStringArray.splice(z, 1);
          //evalStringArray.splice(z, 1);
          j = 1;
          z = 0;
        }
        else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "+")) {
          evalStringArray.splice(z, 1);
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
      input_ans.value = evaluation;
if (input_ans.value == "Infinity"){
  input_ans.value = "Error";
}
else if (!input_ans.value.includes('.')){
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
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else {
          var evaluation = eval(problem);
          evaluation = Number(evaluation);
          input_ans.value = evaluation.toExponential();
        }
      }
    }

else if (input_ans.value.includes('.')){
      var tells = input_ans.value.indexOf(".");
      tells = tells;
      console.log(tells);
      if (tells > 3) {
        //make an array. add comma to array. make it the output.
        if (tells == 5) {
          commas = [];
          for (var h = 0; h < input_ans.value.length; h++){
            if (input_ans.value[h] != ",") {
              var value = input_ans.value[h];
              commas.push(value);
            }
          }
          commas.splice(2, 0, ",");
          var problem4 = commas.join('');
          problem4 = problem4.replace(/ +/g, ' ');
          input_ans.value = '';
          input_ans.value = problem4;
        }
        else if (tells == 4) {
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
        }



        else if (tells == 6) {
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
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (tells == 7) {
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
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (tells == 8) {
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
          input_ans.value = '';
          input_ans.value = problem5;
        }
        else if (tells == 9) {
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
          input_ans.value = '';
          input_ans.value = problem5;
        }
        /*else if (tells == 10) {
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
          input_ans.value = '';
          input_ans.value = problem5;
        } */
        else {
          var evaluation = eval(problem);
          evaluation = Number(evaluation);
          input_ans.value = evaluation.toExponential();
        }
      }
    }
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
  document.getElementById("input").style.fontSize = "210%";
  zero = 0;
}

function answer(num1, num2, operand){
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
  /* input_var.value = evaluation; */
  var k = input_ans.value;
  input_var.value = k;
  input_ans.value = "";
/*
if (!input_var.value.includes('.')){
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
      console.log("working:");
      console.log(input_var.value.length);
    }
}
else if (input_var.value.includes('.')){
          var tells = input_var.value.indexOf(".");
          tells = tells;
          console.log("answer" + tells);
          if (tells > 3) {
            //make an array. add comma to array. make it the output.
            if (tells == 5) {
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
            else if (tells == 4) {
              commas = [];
              for (var h = 0; h < input_var.value.length; h++){
                if (input_var.value[h] != ",") {
                  var value = input_ans.value[h];
                  commas.push(value);
                }
              }
              commas.splice(1, 0, ",");
              var problem4 = commas.join('');
              problem4 = problem4.replace(/ +/g, ' ');
              input_var.value = '';
              input_var.value = problem4;
            }



            else if (tells == 6) {
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
            else if (tells == 7) {
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
            else if (tells == 8) {
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
            else if (tells == 9) {
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
        }

  }
/*
  /*
  var num1 = num01;
  console.log(num1);
  var operand = operand1;
  console.log(operand);
  var num2 = num02;
  console.log(num2);*/

  if (input_var.value.length > 20){
    document.getElementById("input").style.fontSize = "150%";
  }
}

function Negation() {
  console.log("eval" + evalStringArray);
  var index1 = evalStringArray.length;
  var index2 = index1 - 1;
  var index3 = input_var.value.length;

  /*This loop deletes the current input_var.value from the evalStringArray*/
for (var del = 0; del < index3; del++){
  evalStringArray.splice(index2, 1);
  index2--;
  console.log("del: " + del);
  console.log("index2: " + index2);
}

console.log("evalStringArray = " + evalStringArray);


  var negnum = input_var.value * (-1);
  input_var.value = negnum;

  if (negnum < 0){
  negnum = negnum.toString();
  var newnum = [];
  console.log("negum length: " + negnum.length);
  for(var hos = 0; hos < negnum.length; hos++){
    newnum.push(negnum[hos]);
  }

  console.log("newnum:" + newnum);
  var index1 = evalStringArray.length;
  var index2 = index1 - 1;

  for (var del1 = 0; del1 < (newnum.length); del1++){
    evalStringArray.push(newnum[del1]);
    console.log("new eval: " + evalStringArray);
  }
}

else {
  negnum = negnum.toString();
  var newnum = [];
  console.log("negum length: " + negnum.length);
  for(var hos = 0; hos < negnum.length; hos++){
    newnum.push(negnum[hos]);
  }

  console.log("newnum:" + newnum);
  var index1 = evalStringArray.length;
  var index2 = index1 - 1;

  for (var del1 = 0; del1 < newnum.length; del1++){
    evalStringArray.push(newnum[del1]);
    console.log("new eval: " + evalStringArray);
  }

}

var z = 0;
for (var j = 1; j < evalStringArray.length;){
  console.log("evalStringArray: " + evalStringArray);
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
  else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "-")) {
    evalStringArray.splice(z, 1);
    //evalStringArray.splice(z, 1);
    j = 1;
    z = 0;
  }
  else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "*")) {
    evalStringArray.splice(z, 1);
    //evalStringArray.splice(z, 1);
    j = 1;
    z = 0;
  }
  else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "/")) {
    evalStringArray.splice(z, 1);
    //evalStringArray.splice(z, 1);
    j = 1;
    z = 0;
  }
  else if ((evalStringArray[j] == "-") && (evalStringArray[z] == "+")) {
    evalStringArray.splice(z, 1);
    //evalStringArray.splice(z, 1);
    j = 1;
    z = 0;
  }
  else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "+")) {
    evalStringArray.splice(z, 1);
    //evalStringArray.splice(z, 1);
    j = 1;
    z = 0;
  }
  else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "+")) {
    evalStringArray.splice(z, 1);
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
input_ans.value = evaluation;
if (input_ans.value == "Infinity"){
input_ans.value = "Error";
}
else if (!input_ans.value.includes('.')){
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
    input_ans.value = '';
    input_ans.value = problem5;
  }
  else {
    var evaluation = eval(problem);
    evaluation = Number(evaluation);
    input_ans.value = evaluation.toExponential();
  }
}
}

else if (input_ans.value.includes('.')){
var tells = input_ans.value.indexOf(".");
tells = tells;
console.log(tells);
if (tells > 3) {
  //make an array. add comma to array. make it the output.
  if (tells == 5) {
    commas = [];
    for (var h = 0; h < input_ans.value.length; h++){
      if (input_ans.value[h] != ",") {
        var value = input_ans.value[h];
        commas.push(value);
      }
    }
    commas.splice(2, 0, ",");
    var problem4 = commas.join('');
    problem4 = problem4.replace(/ +/g, ' ');
    input_ans.value = '';
    input_ans.value = problem4;
  }
  else if (tells == 4) {
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
  }



  else if (tells == 6) {
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
    input_ans.value = '';
    input_ans.value = problem5;
  }
  else if (tells == 7) {
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
    input_ans.value = '';
    input_ans.value = problem5;
  }
  else if (tells == 8) {
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
    input_ans.value = '';
    input_ans.value = problem5;
  }
  else if (tells == 9) {
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
    input_ans.value = '';
    input_ans.value = problem5;
  }
  /*else if (tells == 10) {
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
    input_ans.value = '';
    input_ans.value = problem5;
  } */
  else {
    var evaluation = eval(problem);
    evaluation = Number(evaluation);
    input_ans.value = evaluation.toExponential();
  }
}
}
  }

  function Percentage() {
    var index1 = evalStringArray.length;
    var index2 = index1 - 1;
    var index3 = input_var.value.length;

    /*This loop deletes the current input_var.value from the evalStringArray*/
  for (var del = 0; del < index3; del++){
    evalStringArray.splice(index2, 1);
    index2--;
  }

    /*The number of decimals in the product equals the sum of the number of decimals in the factors*/

 function countDecimals(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
      return 0;
}

/* function countDecimals(value){
  value = value.toString();
  if (value.includes(".")){
    var index = value.indexOf(".");
    var count4 = 0;
    for (var deci = index; deci < (value.length - 1); deci++){
      count4++;
    }
  }
  else {
    count4 = 0;
  }
  return count4;
} */

/* function countIndex(value1) {
  value1 = value1.toString();
  if (value1.includes(".")){
    var index = value1.indexOf(".");
    console.log("INDEX: " + index);
    for (var deci = index; deci < (value1.length); deci++){
      if (value1[deci] != 0){
        var hobi = (deci - 1);
      }
    }
  }
  else {
    var hobi = 0;
  }
  return hobi;
}
*/
    var percent = Number(input_var.value * 0.01);
    console.log("INPUT: " + input_var.value);
    var value1 = Number(input_var.value);
    var total1 = Number(countDecimals(value1));
    var total2 = Number(countDecimals(0.01));
    var total3 = total1 + total2;
    console.log("TOTAL1 " + total1);
    console.log("TOTAL2 " + total2);
    console.log("TOTAL3 " + total3);

    percent = percent.toFixed(total3);

    console.log("INITIAL PERCENT: " + percent);
    input_var.value = percent;
    percent = percent.toString();
    var newnum = [];
    console.log("percent length: " + percent.length);
    for(var hos = 0; hos < percent.length; hos++){
      newnum.push(percent[hos]);
    }

    console.log("newnum:" + newnum);
    var index1 = evalStringArray.length;
    var index2 = index1 - 1;

    for (var del1 = 0; del1 < (newnum.length); del1++){
      evalStringArray.push(newnum[del1]);
      console.log("new eval: " + evalStringArray);
    }
    var z = 0;
    for (var j = 1; j < evalStringArray.length;){
      console.log("evalStringArray: " + evalStringArray);
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
      else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "-")) {
        evalStringArray.splice(z, 1);
        //evalStringArray.splice(z, 1);
        j = 1;
        z = 0;
      }
      else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "*")) {
        evalStringArray.splice(z, 1);
        //evalStringArray.splice(z, 1);
        j = 1;
        z = 0;
      }
      else if ((evalStringArray[j] == "+") && (evalStringArray[z] == "/")) {
        evalStringArray.splice(z, 1);
        //evalStringArray.splice(z, 1);
        j = 1;
        z = 0;
      }
      else if ((evalStringArray[j] == "-") && (evalStringArray[z] == "+")) {
        evalStringArray.splice(z, 1);
        //evalStringArray.splice(z, 1);
        j = 1;
        z = 0;
      }
      else if ((evalStringArray[j] == "*") && (evalStringArray[z] == "+")) {
        evalStringArray.splice(z, 1);
        //evalStringArray.splice(z, 1);
        j = 1;
        z = 0;
      }
      else if ((evalStringArray[j] == "/") && (evalStringArray[z] == "+")) {
        evalStringArray.splice(z, 1);
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
    input_ans.value = evaluation;
if (input_ans.value == "Infinity"){
input_ans.value = "Error";
}
else if (!input_ans.value.includes('.')){
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
        input_ans.value = '';
        input_ans.value = problem5;
      }
      else {
        var evaluation = eval(problem);
        evaluation = Number(evaluation);
        input_ans.value = evaluation.toExponential();
      }
    }
  }

else if (input_ans.value.includes('.')){
    var tells = input_ans.value.indexOf(".");
    tells = tells;
    console.log(tells);
    if (tells > 3) {
      //make an array. add comma to array. make it the output.
      if (tells == 5) {
        commas = [];
        for (var h = 0; h < input_ans.value.length; h++){
          if (input_ans.value[h] != ",") {
            var value = input_ans.value[h];
            commas.push(value);
          }
        }
        commas.splice(2, 0, ",");
        var problem4 = commas.join('');
        problem4 = problem4.replace(/ +/g, ' ');
        input_ans.value = '';
        input_ans.value = problem4;
      }
      else if (tells == 4) {
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
      }



      else if (tells == 6) {
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
        input_ans.value = '';
        input_ans.value = problem5;
      }
      else if (tells == 7) {
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
        input_ans.value = '';
        input_ans.value = problem5;
      }
      else if (tells == 8) {
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
        input_ans.value = '';
        input_ans.value = problem5;
      }
      else if (tells == 9) {
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
        input_ans.value = '';
        input_ans.value = problem5;
      }
      /*else if (tells == 10) {
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
        input_ans.value = '';
        input_ans.value = problem5;
      } */
      else {
        var evaluation = eval(problem);
        evaluation = Number(evaluation);
        input_ans.value = evaluation.toExponential();
      }
    }
  }
    }

  /* Restructure negation function. Make the input_var.value.length into an array. If a negative is already there, take it out. If it's not there, put it there.
  Then, delete the input_var.value from the evalStringArray and then put back the new value.  */
