let hour = document.getElementById("hour");     // 시
let min = document.getElementById("min");       // 분
let sec = document.getElementById("sec");       // 초

let start = document.getElementById("start");   // 시작버튼
let reset = document.getElementById("reset");   // 리셋버튼

let hUp = document.getElementById("hUp");       // 시up
let hDown = document.getElementById("hDown");   // 시down

let mUp = document.getElementById("mUp");       // 분up
let mDown = document.getElementById("mDown");   // 분down

let sUp = document.getElementById("sUp");       // 초up
let sDown = document.getElementById("sDown");   // 초down

let count = 0;
let interval;

hour.value = "00";
min.value = "00";
sec.value = "00";

// 시간 up 
hUp.addEventListener("click", () => {
    count = hour.value;     // count에 기존에 설정된 시간을 입력

    if (count < 99) {
        count++;
    }

    hour.value = count;     // 바뀐 count값을 시간으로 설정
    hour.value = String(hour.value).padStart(2, '0');
});

// 시간 down
hDown.addEventListener("click", () => {
    count = hour.value;     // count에 기존에 설정된 시간을 입력

    if (count > 0) {
        count--;
    }

    hour.value = count;     // 바뀐 count값을 시간으로 설정
    hour.value = String(hour.value).padStart(2, '0');
});

// 분 up
mUp.addEventListener("click", () => {
    count = min.value;     // count에 기존에 설정된 시간을 입력

    if (count < 59) {
        count++;
    } else {
        hour.value++;
        hour.value = String(hour.value).padStart(2, '0');
        count = 0;
    }

    min.value = count;     // 바뀐 count값을 시간으로 설정
    min.value = String(min.value).padStart(2, '0');
});

// 분 down
mDown.addEventListener("click", () => {
    count = min.value;     // count에 기존에 설정된 시간을 입력

    if (count > 0) {
        count--;
    }

    min.value = count;     // 바뀐 count값을 시간으로 설정
    min.value = String(min.value).padStart(2, '0');
});

// 초up
sUp.addEventListener("click", () => {
    count = sec.value;     // count에 기존에 설정된 시간을 입력

    if (count < 59) {
        count++;
    } else {
        min.value++;
        min.value = String(min.value).padStart(2, '0');
        count = 0;
    }

    sec.value = count;     // 바뀐 count값을 시간으로 설정
    sec.value = String(sec.value).padStart(2, '0');
});

// 초 down
sDown.addEventListener("click", () => {
    count = sec.value;     // count에 기존에 설정된 시간을 입력

    if (count > 0) {
        count--;
    }

    sec.value = count;     // 바뀐 count값을 시간으로 설정
    sec.value = String(sec.value).padStart(2, '0');
});

// 초 추가
function plusS() {
    count = Number(sec.value);
    count += 10;

    if (count > 59) {
        count -= 60;
        min.value++;
        min.value = String(min.value).padStart(2, '0');
    }

    sec.value = count;
    sec.value = String(sec.value).padStart(2, '0');
}

// 분 추가
function plusM(x) {
    count = Number(min.value);
    count += x;

    if (count > 59) {
        count -= 60;
        hour.value++;
        hour.value = String(hour.value).padStart(2, '0');
    }

    min.value = count;
    min.value = String(min.value).padStart(2, '0');
}

// 시 추가
function plusH() {
    count = Number(hour.value);

    if (count < 99) {
        count++;
    }

    hour.value = count;
    hour.value = String(hour.value).padStart(2, '0');
}

// 시작 버튼
start.addEventListener("click", () => {

    if (start.innerHTML == "시작") {
        start.innerHTML = "정지";

        clearInterval(interval);

        interval = setInterval(() => {
            if (sec.value == 0) {
                if (min.value == 0) {
                    if (hour.value == 0) {
                        alert('타임아웃');
                        clearInterval(interval);
                        start.innerHTML = "시작";
                    } else {
                        min.value = 59;
                        sec.value = 59;
                        hour.value--;
                        hour.value = String(hour.value).padStart(2, 0);
                    }

                } else {
                    sec.value = 59;
                    min.value--;
                    min.value = String(min.value).padStart(2, 0);
                }
            } else {
                sec.value--;
                sec.value = String(sec.value).padStart(2, 0);
            }
        }, 1000);

    } else {
        start.innerHTML = "시작";
        clearInterval(interval);
    }


});
// 리셋버튼
reset.addEventListener("click", () => {
    clearInterval(interval);
    start.innerHTML = "시작";
    hour.value = "00";
    min.value = "00";
    sec.value = "00";
});