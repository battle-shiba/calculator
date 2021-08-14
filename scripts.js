const display = document.querySelector('.display');

const btns = document.querySelectorAll('.button');

const operatorBtns = document.querySelectorAll('.operator')

const addBtn = document.querySelector('#add');

const mulBtn = document.querySelector('#multiply');

const subBtn = document.querySelector('#subtract');

const divBtn = document.querySelector('#divide');

const clearBtn = document.querySelector('#clr');

const equalsBtn = document.querySelector('#equals');

let digitBtns = [];

let operator = 0;
let ans = +display.textContent;

//----------------------------------------------------------------//
btns.forEach((btn) => {
    if ( !isNaN(btn.textContent) ) {
        digitBtns.push(btn);
        
    }

});

digitBtns.forEach((btn) => {
    btn.addEventListener('click', function() {

        

        if (display.textContent == ans) {
            display.textContent = btn.textContent;
            
        }
        else {
            display.textContent = display.textContent+btn.textContent;
        }
        
        

        
    });
});

addBtn.addEventListener('click', function() {
    if (operator) {
        ans = operate(operator,ans,display.textContent);
        display.textContent = ans;
        
    }
    else {
        ans = display.textContent;
    }
    operator = add;
});

mulBtn.addEventListener('click', function() {
    if (operator) {
        ans = operate(operator,ans,display.textContent);
        display.textContent = ans;
        
    }
    else {
        ans = display.textContent;
    }
    operator = multiply;
});

subBtn.addEventListener('click', function() {
    if (operator) {
        ans = operate(operator,ans,display.textContent);
        display.textContent = ans;
        
    }
    else {
        ans = display.textContent;
    }
    operator = subtract;
});

divBtn.addEventListener('click', function() {
    if (operator) {
        ans = operate(operator,ans,display.textContent);
        display.textContent = ans;
        
    }
    else {
        ans = display.textContent;
    }
    operator = divide;
});

clearBtn.addEventListener('click', clear);

equalsBtn.addEventListener('click', function() {
    ans = operate(operator,ans,display.textContent)
    display.textContent = ans;
    operator = 0;
})



//----------------------------------------------------------------//

function add(m,n) {
    m= +m;
    n = +n;
    return m+n;
}

function subtract(m,n) {
    return m-n;
}

function multiply(m,n) {
    m = +m;
    n = + n;
    return m*n;
}

function divide(m,n) {
    return m/n
}

function operate(operator,m,n) {
    return operator(m,n);
}


//----------------------------------------------------------------//

function clear() {
    operator = 0;
    ans = 0;
    display.textContent = 0;
}