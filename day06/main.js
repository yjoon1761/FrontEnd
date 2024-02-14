// 입력받을 내용 변수
let txt = "";

// 결과를 출력할 영역
let result = document.getElementById("result");

function btn(X) {
    txt += X;
    result.innerHTML = txt;
}

function clean() {
    result.innerHTML = '0';
    txt = "";
}

function oper() {
    // eval() : 매개변수 안에 있는 문자열을 계산하여 출력
    txt = eval(txt);
    result.innerHTML = txt;
    // txt = "";
}

function sqr(X) {
    txt = 
    result.innerHTML = txt;
}

function root(X) {
    let num1 = X / 2;
    while((num1 ** 2) !== X){
        if(Number((num1 ** 2).toFixed(2)) === X){
            break;
        }
        num1 = (num1 + (X / num1)) / 2;
    }
    return Number(num1.toFixed(2));
}