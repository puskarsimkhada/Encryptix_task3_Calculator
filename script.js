const btn = document.querySelectorAll(".mybtn");
const total = document.getElementById("total");
let symbol = document.getElementById("symbol");
let totalvalue = '';
let firstInput = '';
let secondInput = '';
let operator = '';
let flag = false;

btn.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");
    if(value == "ac"){
       totalvalue = '';
       firstInput = '';
       secondInput = '';
        operator = '';
        symbol.innerText = '';
        total.innerText = 0;
      }
        else if(value === "="){
          secondInput = totalvalue;
          let result;
          switch(operator){
            case "+":
              result = parseFloat(firstInput) + parseFloat(secondInput);
              break;
              case "%":
              result = parseFloat(firstInput) % parseFloat(secondInput);
              break;
              case "-":
              result = parseFloat(firstInput) - parseFloat(secondInput);
              break;
              case "*":
              result = parseFloat(firstInput) * parseFloat(secondInput);
              break;
              case "/":
              result = parseFloat(firstInput) / parseFloat(secondInput);
              break;
              default:
              result = "";
          }
          total.innerText = result;
          totalvalue = result.toString();
          flag = true;
          operator = '';
          firstInput = '';
          secondInput = '';
      }
      else if(value == "+" || value == "-" || value == "*" || value == "/" || value == "%"){
        symbol.innerText = value;
        if(totalvalue){
          if(flag){

            firstInput = totalvalue;
            flag= false;
          }
          else{
            firstInput = totalvalue;
          }
          operator = value;
          totalvalue = '';
        }
      }
      else if(value == "back"){
        totalvalue = totalvalue.slice(0, -1);
        if(totalvalue == ''){
          totalvalue = 0;
        }
        total.innerHTML = totalvalue;
      }
      else{
         if(flag){
          totalvalue = value;
          flag = false;
        }
        else{
          totalvalue += value;
        }
        total.innerText = totalvalue;
      }
    
  }
  
  )
})