const display = document.querySelector('.display');

const btns = document.querySelectorAll('.button');

let digitBtns = [];

btns.forEach((btn) => {
    if ( !isNaN(btn.textContent) ) {
        digitBtns.push(btn);
        
    }

});

digitBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        display.textContent = btn.textContent;

    });
});




function add(m,n) {
    return m+n;
}

function subtract(m,n) {
    return m-n;
}

function multiply(m,n) {
    return m*n;
}

function divide(m,n) {
    return m/n
}

function operate(operator,m,n) {
    return operator(m,n);
}

