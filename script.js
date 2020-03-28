var i, j, op1, op2, op, f;
let clear = false;

function digit(i) {
  // i is the argument passed into the function
  if (clear) {
    reset();
    clear = false;
  }
  // we use a switch statement to concatenate the string that is shown on the output
  switch (i) {
    case 1:
      document.getElementById("history").value =
      document.getElementById("history").value + "1";
        document.getElementById("result").value += "1";
        
      break;
    case 2:
      document.getElementById("history").value =
      document.getElementById("history").value + "2";
        document.getElementById("result").value += "2";
        
      break;
    case 3:
      document.getElementById("history").value =
      document.getElementById("history").value + "3";
        document.getElementById("result").value += "3";
        
      break;
    case 4:
      document.getElementById("history").value =
      document.getElementById("history").value + "4";
        document.getElementById("result").value += "4";
       
      break;
    case 5:
      document.getElementById("history").value =
      document.getElementById("history").value + "5";
        document.getElementById("result").value += "5";
        
      break;
    case 6:
      document.getElementById("history").value =
      document.getElementById("history").value + "6";
        document.getElementById("result").value += "6";
        
      break;
    case 7:
      document.getElementById("history").value =
      document.getElementById("history").value + "7";
        document.getElementById("result").value += "7";
       
      break;
    case 8:
      document.getElementById("history").value =
      document.getElementById("history").value + "8";
        document.getElementById("result").value += "8";
        
      break;
    case 9:
      document.getElementById("history").value =
      document.getElementById("history").value + "9";
        document.getElementById("result").value += "9";
       
      break;
    case 0:
      document.getElementById("history").value =
      document.getElementById("history").value + "0";
        document.getElementById("result").value += "0";
  
      break;
    case 10:
      document.getElementById("history").value =
        document.getElementById("result").value + ".";
        document.getElementById("result").value += ".";
      break;
  }
}
// this operation function checks what operation is carried out- if it's either of +,-,/or *,
// it'll firstly assign the first set of inputed digits (which is being converted to number
// variable type using parseFloat), to a variable, secondly, it clears the screen to prepare for
// the second set of digits. then assign the value of the operator(depending on whichever operator was selected)
// to the previously declared variable e.g op = 1 = +.
// if the operation is =, it get's the value of the first and second set of digits, and the operaator,carry out the
// respective operation, and then displays the result
function operation(j) {
    clear = false;
    if (j == 1) {
      op1 = parseFloat(document.getElementById("result").value); //assign the first set of inputed digits (which is being converted to number) to op1
      document.getElementById("result").value = ""; //clears the screen
      document.getElementById("history").value += " + "; //clears the screen
      op = 1; //assign the value of the operator
    }
  if (j == 2) {
    op1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
    document.getElementById("history").value += " - ";
    op = 2;
  }
  if (j == 3) {
    op1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
    document.getElementById("history").value += " x ";
    op = 3;
  }
  if (j == 4) {
    op1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
    document.getElementById("history").value += " / ";
    op = 4;
  }
  if (j == 5) {
    op2 = parseFloat(document.getElementById("result").value);
    
    if (op == 1) {
      f = op1 + op2;
      document.getElementById("result").value = f;
    } else if (op == 2) {
      f = op1 - op2;
      document.getElementById("result").value = f;
    } else if (op == 3) {
      f = op1 * op2;
      document.getElementById("result").value = f;
    } else if (op == 4) {
      f = op1 / op2;
      document.getElementById("result").value = f;
    }
    // document.getElementById("history").value += ` = ${f}`;
    clear = true;
  }
}
function reset() {
  op1 = 0;
  op2 = 0;
  document.getElementById("result").value = "";
  document.getElementById("history").value = "";
}