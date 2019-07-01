function calc() {
    let inputOne = parseInt(document.getElementById('value1').value);
    let inputTwo = parseInt(document.getElementById('value2').value);
    let op = document.getElementById('operator').value;
    let calculate;

    if (op == 'add') {
        calculate = inputOne + inputTwo;
    } else if (op == 'subtract'){
        calculate = inputOne - inputTwo;
    }else if (op == 'multiply'){
        calculate = inputOne * inputTwo;
    }else if (op == 'divide'){
        calculate = inputOne / inputTwo;
    }
    // console.log(calculate);
    document.querySelector('span').innerHTML = calculate;
}
