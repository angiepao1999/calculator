function getHistory () {
    return document.getElementById("history-value").innerText;
}
function printHistory(GET_NUM) {
    document.getElementById("history-value").innerText = GET_NUM;
}
function setOutput(num) {
    return document.getElementById("output-value").innerText = num;
}
function getOutput () {
    return document.getElementById ("output-value").innerText;
}
function printOutput(GET_NUM) {
    if (GET_NUM=="")
    {
        document.getElementById ("output-value").innerText = GET_NUM;
      }
      else {
        document.getElementById ("output-value").innerText-getFormattedNumber(GET_NUM);
    }

}
function getFormattedNumber (GET_NUM){
    if (GET_NUM =="-")
    {
        return "";
    }
    let n = Number(GET_NUM);
    let value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(GET_NUM) {
    return Number(GET_NUM.replace(/,/g,''));

}


let operator = document.getElementsByClassName("operator");
for (let i=0; i < operator.length; i++)
{
    operator[i].addEventListener('click', function() {
        if (this.id=="clear") {
            printHistory("");
            printOutput("");

        }
        else if(this.id=="backspace"){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output) {
                output = output.substr(0, output.length -1);
                printOutput(output);
            }
        }
        else {
            let output = getOutput();
            let history= getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length- 1])){
                  history= history.substr(0, history.length- 1);

                }
            }
            if (output!="" || history!="") {
                output = output==""?output:reverseNumberFormat(output);
                history = history + output;
                if (this.id=="=") {
                    var result = eval(history);
                    printHistory(result);
                    printHistory("");
                }
                else {
                    history-history+this.id;
                    printHistory(history);
                    printOutput(""); 
                }
                
            }
        }
    });
}

let number = document.getElementsByClassName("number")
for(let i=0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        console.log(number[i])
        setOutput(number[i].innerHTML)
        if (output!=NaN){
            output= output+this.id;
            printOutput(output);
        }
    });
} 