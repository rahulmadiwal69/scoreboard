let btn = document.getElementById("btn");


function purschase() {
   
    let x = document.getElementById("error").innerText = "an error accured try after some time";
    
}

btn.addEventListener("click",purschase);


let no1 = prompt("enter first no");
let no2 = prompt("enter sec no");
document.getElementById("no1").textContent = no1;
document.getElementById("no2").textContent = no2;


function add(){
    let sum1 = parseInt(+no1 + +no2);
    document.getElementById("sum").textContent = "sum:"
    document.getElementById("sum").textContent +=  sum1;
    
}
function subtract(){
    let sum2 = parseInt(no1-no2);
    document.getElementById("sum").textContent = "sum:"
    document.getElementById("sum").textContent +=  sum2;
}
function multiply(){
    let sum3 = parseInt(no1*no2);
    document.getElementById("sum").textContent = "sum:"
    document.getElementById("sum").textContent +=  sum3;
}
function divide(){
    let sum4 = parseInt(no1/no2);
    document.getElementById("sum").textContent = "sum:"
    document.getElementById("sum").textContent += sum4;
}


document.getElementById("add").addEventListener("click",add);
document.getElementById("subtract").addEventListener("click",subtract);
document.getElementById("multiply").addEventListener("click",multiply);
document.getElementById("divide").addEventListener("click",divide);


