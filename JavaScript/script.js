function add()
{

    num1 = parseInt(document.getElementById("firstNumber").value);
    num2 = parseInt(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = num1 + num2;
}

function sub()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiply()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divide() 
{ 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}