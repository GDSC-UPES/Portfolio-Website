function add(){
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    console.log(numberOne,numberTwo);

    let sum = numberOne + numberTwo
    document.getElementById("answer").innerHTML = sum;

}
function sub(){
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    console.log(numberOne,numberTwo);

    let sub = numberOne - numberTwo
    document.getElementById("answersub").innerHTML = sub;
    
}
function mul(){
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    console.log(numberOne,numberTwo);

    let sum = numberOne * numberTwo
    document.getElementById("answermul").innerHTML = sum;
    
}
function divi(){
    let numberOne = parseInt(document.getElementById("numberOne").value);
    let numberTwo = parseInt(document.getElementById("numberTwo").value);
    console.log(numberOne,numberTwo);

    let sum = numberOne / numberTwo
    document.getElementById("answerdivi").innerHTML = sum;
    
}