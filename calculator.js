let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
let clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener("click", function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let sum = a + b;
    result.textContent = sum;
});

subBtn.addEventListener("click", function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let diff = a - b;
    result.textContent = diff;
});

mulBtn.addEventListener("click", function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let product = a * b;
    result.textContent = product;
});

divBtn.addEventListener("click", function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    if (b === 0) {
        result.textContent = "نمیشه بر صفر تقسیم کرد!";
    } else {
        let quotient = a / b;
        result.textContent = quotient;
    }
});

clearBtn.addEventListener("click", function() {
    num1.value = "";
    num2.value = "";
    result.textContent = "۰";
});