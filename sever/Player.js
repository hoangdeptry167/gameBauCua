//Tạo đối tượng người chơi (Players)
export var tien_nguoi_choi = 10000;
export var Player = {
    data: [],
    viewPlayer: function () {
        // Lấy danh sách người chơi
        var listPlayer = this.data;

        // Lặp và hiển thị người chơi
        for (var i = 0; i < listPlayer.length; i++) {
            console.log(Player.data[i]);
        }
    },
    addPlayer: function (id, ten, sotiendat, sotiengoc = 10000) {
        // Tạo thông tin người chơi
        var info = {
            ID: id,
            Ten: ten,
            soTienDat: sotiendat,
            soTienGoc: sotiengoc,
        };


        //Thêm người chơi
        Player.data.push(info);
    }

};
// Player.addPlayer('1951012033', 'Luu Tien Trien', 50000, 32131223);
// Player.addPlayer('3000203995', 'tran Huu HOang', 5000, 22222);
// Player.viewPlayer()