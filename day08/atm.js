let Account = {};       // Account 객체 생성
let amount;             // 전역변수 선언'만'
let amount1;
let result = document.getElementById('result');

// 새로운 키(balance)에 값(0)을 추가
Account.balance = 0;

function insert() {
    amount1 = document.getElementById('amount');
    // 변수 amount1에는 입력창(input type="text")의 요소를 담는다.

    amount = Number(amount1.value);
    // amount1.value : 입력한 값(문자열)
    // Number : 
}

Account.deposit = function () {
    insert();

    if (amount1.value == "") {
        result.innerHTML = `===================
        입금할 금액을 입력하세요.`
    } else {
        this.balance += amount;
        result.innerHTML = `===================
        ${amount}원 입금했습니다.`
    }
    amount1.value = "";
    amount1.focus();
}

Account.withdraw = function () {
    insert();

    if (amount1.value == "") {
        result.innerHTML = `=================
        출금할 금액을 입력하세요.`;
    } else {
        if (this.balance >= amount) {
            this.balance -= amount;
            result.innerHTML = `=================
            ${amount}원 출금했습니다.`;
        } else {
            result.innerHTML = `=================
            잔액이 ${amount - this.balance}원
            부족합니다.`;
        }


    }

    amount1.value = "";
    amount1.focus();

}

Account.msg = function () {
    result.innerHTML = `=================
    잔액: ${this.balance}원`;
}

Account.clean = function() {
    result.innerHTML = ``;
}