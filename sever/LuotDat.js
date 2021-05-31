export function setTien_nguoi_choi_player(x) {
  tien_nguoi_choi_player = x;
}


export var luachon1 = [];
export var tien_nguoi_choi_player = 0;
//lựa chọn 1
document.getElementById('quanlynutTien').style.pointerEvents = 'none';

luachon1["money"] = 0;
//Lựa chọn 2
export var luachon2 = [];

luachon2["money"] = 0;
//Lựa chọn 3
export var luachon3 = [];

luachon3["money"] = 0;
//Biến tạm trước khi đẩy vào mảng 
export var luachon4 = [];
luachon4["id"] = 4;
luachon4["money"] = 0;
export var mang = new Array(luachon1, luachon2, luachon3);
export let x = "";
export let id = 0;
// tổng tiền đặt
export var tong_tien_dat = 0;
export function KiemtraOdat() {
  if (luachon1.luachon !== x && luachon2.luachon !== x && luachon3.luachon !== x && luachon1.money > 0 && luachon2.money > 0 && luachon3.money > 0) {
    alert('bạn đã đặt đủ số lượng ô');
  }
}

//Hàm tổng tiền đặt cược
export function tong_tien_dat_cuoc() {
  tong_tien_dat = mang[0].money + mang[1].money + mang[2].money;
  return tong_tien_dat;
}
//Hàm set tổng số tiền đặt cược
export function set_Tong_tien_dat_cuoc(a) {
  tong_tien_dat = a;
}
// Xử lý sự kiện click trên bàn cờ
export var banco = document.getElementsByClassName("banco");
// Xử lý giá trị ô Nai
banco[0].onclick = function ten() {
  x = "Bau";
  id = 1;
  KiemtraOdat();
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}
banco[1].onclick = function ten() {
  x = "Cua";
  id = 2;
  KiemtraOdat();
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}
banco[2].onclick = function ten() {
  x = "Tom";
  id = 3;
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}
banco[3].onclick = function ten() {

  x = "Ca";
  id = 4;
  KiemtraOdat();
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}
banco[4].onclick = function ten() {

  x = "Ga";
  id = 5;
  KiemtraOdat();
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}
banco[5].onclick = function ten() {

  x = "Nai";
  id = 6;
  KiemtraOdat();
  document.getElementById('quanlynutTien').style.pointerEvents = 'auto';
}

//Lấy giá trị từ các ô giá trị
var laygiatri = document.getElementsByName('giatri');
// Giá trị 1000
laygiatri[0].onclick = function value0() {
  luachon4.money = 0;
  var a = Number(laygiatri[0].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || mang[0].luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 1000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 1000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 1000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 1000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 1000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 1000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    //đang làm đến đoạn này
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 1000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 1000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 1000;
        alert('Không đủ số dư');
      }
    }
    // đang làm đến đoạn này
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 2000
laygiatri[1].onclick = function value1() {
  luachon4.money = 0;
  var a = Number(laygiatri[1].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 2000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 2000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 2000;
        alert('Không đủ số dư');
      }
    }

    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 2000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 2000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 2000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 2000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 2000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 2000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 3000
laygiatri[2].onclick = function value2() {
  luachon4.money = 0;
  var a = Number(laygiatri[2].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 3000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 3000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 3000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }

  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 3000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 3000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 3000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 3000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 3000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 3000;
        alert('Không đủ số dư');
      }
    }

    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 4000
laygiatri[3].onclick = function value3() {
  luachon4.money = 0;
  var a = Number(laygiatri[3].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 4000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 4000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 4000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 4000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 4000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 4000;
        alert('Không đủ số dư');
      }
    }
    tong_tien_dat_cuoc();
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 4000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 4000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 4000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 5000
laygiatri[4].onclick = function value4() {
  luachon4.money = 0;
  var a = Number(laygiatri[4].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 5000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 5000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 5000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 5000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 5000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 5000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 5000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 5000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 5000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 6000
laygiatri[5].onclick = function value5() {
  luachon4.money = 0;
  var a = Number(laygiatri[5].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 6000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 6000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 6000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 6000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 6000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 6000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 6000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 6000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 6000;
        alert('Không đủ số dư');
      }
    }
    tong_tien_dat_cuoc();
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 7000
laygiatri[6].onclick = function value6() {
  luachon4.money = 0;
  var a = Number(laygiatri[6].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 7000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 7000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 7000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 7000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 7000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 7000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 7000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 7000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 7000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 8000
laygiatri[7].onclick = function value7() {
  luachon4.money = 0;
  var a = Number(laygiatri[7].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 8000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 8000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 8000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 8000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 8000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 8000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 8000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 8000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 8000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 9000
laygiatri[8].onclick = function value8() {
  luachon4.money = 0;
  var a = Number(laygiatri[8].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 9000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 9000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 9000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 9000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 9000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 9000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 9000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 9000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 9000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}
//Giá trị 10000
laygiatri[9].onclick = function value9() {
  luachon4.money = 0;
  var a = Number(laygiatri[9].value);
  luachon4.money = luachon4.money + a;
  console.log(luachon4.money);
  if (luachon1.money == 0 || luachon1.luachon === x) {
    luachon1["id"] = id;
    luachon1["luachon"] = x;
    luachon1["money"] = luachon1["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 10000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 10000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon1["money"] = luachon1["money"] - 10000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon1.luachon).innerHTML = luachon1.money;
  }
  console.log(x);
  if ((mang[0].luachon !== x && mang[1].money == 0) || luachon2.luachon === x) {
    luachon2["id"] = id;
    luachon2["luachon"] = x;
    luachon2["money"] = luachon2["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 10000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 10000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon2["money"] = luachon2["money"] - 10000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon2.luachon).innerHTML = luachon2.money;
  }
  if ((mang[0].luachon !== x && mang[1].luachon !== x && luachon3.money == 0) || luachon3.luachon === x) {
    luachon3["id"] = id;
    luachon3["luachon"] = x;
    luachon3["money"] = luachon3["money"] + luachon4.money;
    tong_tien_dat_cuoc();
    if (tien_nguoi_choi_player >= 0) {
      tien_nguoi_choi_player = tien_nguoi_choi_player - 10000;
      document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
      if (tien_nguoi_choi_player < 0) {
        tien_nguoi_choi_player = tien_nguoi_choi_player + 10000;
        document.getElementById('money_player').innerHTML = tien_nguoi_choi_player;
        luachon3["money"] = luachon3["money"] - 10000;
        alert('Không đủ số dư');
      }
    }
    document.getElementById(luachon3.luachon).innerHTML = luachon3.money;
  }
}