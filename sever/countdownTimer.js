export var minute = 0;
export var second = 20;
export var timeOut = null;

// Hàm set thời gian
export function set_second(set){
    second = set;
}
// Hàm bắt đầu đếm ngược từ second đã set
export function start() {

    // nếu số giây bằng -1 thì chỉnh lại css
    if (second === -1) {
        clearTimeout(timeOut);
        document.getElementById("quanLyXucXac").style.visibility = 'visible';  
        document.getElementById("banco").style.opacity = 0.5;  
        return false;
    }
    document.getElementById('minutes').innerText = minute;
    document.getElementById('second').innerText = second;
    // nếu giây chẵn và số giây bé hơn 10 thì màu đỏ
    if(second % 2 === 0 && second <= 10){
        document.getElementById("countdownTimer").style.color = "#d63031";
    }
    // nếu giây lẽ  và số giây bé hơn 10 thì đổi sang màu trắng
    if(second % 2 != 0 && second <= 10){
        document.getElementById("countdownTimer").style.color = "white";
    }
    // nếu second = 0 thì đổi sang màu đỏ
    if(second === 0){
        document.getElementById("countdownTimer").style.color = "#d63031";
    }
    // 1 giây trừ 1 lần ( đệ quy)
    timeOut = setTimeout(function () {
        second--;
        start();
    }, 1000);
    // số giây == 0 thì khóa ô lựa chọn
    if(second === 0){
        document.getElementById('banco').style.pointerEvents = 'none';
    }
    return second;
}
