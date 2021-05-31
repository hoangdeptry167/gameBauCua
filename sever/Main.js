//Đẩy dữ liệu từ file vào Main.js
import * as constants from './LuotDat.js';
import * as dice_1 from '/xucxac/xucxac1.js';
import * as dice_2 from '/xucxac/xucxac2.js';
import * as dice_3 from '/xucxac/xucxac3.js';
import * as countdownTimer from './countdownTimer.js';
console.log(dice_1);
console.log(dice_2);
console.log(dice_3);
console.log(constants);
console.log(countdownTimer);
// nút in mảng trên html
// document.getElementById('testss').onclick = function PrintArray() {
//     console.log(constants.mang);
// }
var tiennguoichoi = 10000;
constants.setTien_nguoi_choi_player(tiennguoichoi);
document.getElementById('money_player').innerText = tiennguoichoi;
document.getElementById("quanLyXucXac").style.visibility = 'hidden';
//hàm bắt đầu khởi chạy đồng hồ đếm ngược
window.onload = function () {
    countdownTimer.start();
};

//Trở lại đồng hồ màu trắng
setInterval(() => {
    countdownTimer.set_second(20);
    document.getElementById("countdownTimer").style.color = "white";
    countdownTimer.start();
}, 30000);
// so sánh giá trị của xúc xắc với giá trị của người chơi đặt
function so_sanh_xuc_xac_tien() {
    console.log( 'gia tri dice_1 = ' + dice_1.dataXucXac_1);
    console.log( 'gia tri dice_2 = ' +dice_2.dataXucXac_2);
    console.log('gia tri dice_3 = ' + dice_3.dataXucXac_3);
    //so sánh giá trị của lựa chọn 1 với 3 xúc xắc
    if (constants.luachon1.id === dice_1.dataXucXac_1) {
        tiennguoichoi = tiennguoichoi + constants.luachon1.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon1.id === dice_2.dataXucXac_2) {
        tiennguoichoi = tiennguoichoi + constants.luachon1.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon1.id === dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi + constants.luachon1.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon1.id !== dice_1.dataXucXac_1 && constants.luachon1.id !== dice_2.dataXucXac_2 && constants.luachon1.id !== dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi - constants.luachon1.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    //so sánh giá trị của lựa chọn 2 với 3 xúc xắc
    if (constants.luachon2.id === dice_1.dataXucXac_1) {
        tiennguoichoi = tiennguoichoi + constants.luachon2.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon2.id === dice_2.dataXucXac_2) {
        tiennguoichoi = tiennguoichoi + constants.luachon2.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon2.id === dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi + constants.luachon2.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon2.id !== dice_1.dataXucXac_1 && constants.luachon2.id !== dice_2.dataXucXac_2 && constants.luachon2.id !== dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi - constants.luachon2.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    //so sánh giá trị của lựa chọn 3 với 3 xúc xắc
    if (constants.luachon3.id === dice_1.dataXucXac_1) {
        tiennguoichoi = tiennguoichoi + constants.luachon3.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon3.id === dice_2.dataXucXac_2) {
        tiennguoichoi = tiennguoichoi + constants.luachon3.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon3.id === dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi + constants.luachon3.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
    if (constants.luachon3.id !== dice_1.dataXucXac_1 && constants.luachon3.id !== dice_2.dataXucXac_2 && constants.luachon3.id !== dice_3.dataXucXac_3) {
        tiennguoichoi = tiennguoichoi - constants.luachon3.money;
        document.getElementById('money_player').innerText = tiennguoichoi;
    }
}

dice_1.xoxucxac_1();
dice_2.xoxucxac_2();
dice_3.xoxucxac_3();

setInterval(() => {
    so_sanh_xuc_xac_tien();
}, 30000);
setInterval(() => {
    constants.luachon1.money = 0;
    constants.luachon1.luachon = "";
    constants.luachon1.id = 0;
    constants.luachon2.money = 0;
    constants.luachon2.luachon = "";
    constants.luachon2.id = 0;
    constants.luachon3.money = 0;
    constants.luachon3.luachon = "";
    constants.luachon3.id = 0;
    document.getElementById('banco').style.pointerEvents = 'auto'; 
    document.getElementById("quanLyXucXac").style.visibility = 'hidden';
    document.getElementById('banco').style.opacity = 1;
    document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
    document.getElementById('Bau').innerHTML = 0;
    document.getElementById('Cua').innerHTML = 0;
    document.getElementById('Tom').innerHTML = 0;
    document.getElementById('Ca').innerHTML = 0;
    document.getElementById('Ga').innerHTML = 0;
    document.getElementById('Nai').innerHTML = 0;
    dice_1.xoxucxac_1();
    dice_2.xoxucxac_2();
    dice_3.xoxucxac_3();
    constants.setTien_nguoi_choi_player(tiennguoichoi);
}, 30000);