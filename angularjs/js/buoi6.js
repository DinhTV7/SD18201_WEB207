// Định nghĩa vùng sử dụng angularjs
let myApp = angular.module('myApp', []);

// Định nghĩa controller
myApp.controller('demoController', function ($scope) {
    // khai báo biến
    $scope.name = "Tạ Văn Định";

    // Khai báo 1 mảng dữ liệu của nhân viên
    // Tên, ngày tháng năm sinh, lương, giới tính (0 là nam, 1 là nữ)
    $scope.nhanVien = [
        {
            hoTen: "Tạ Văn Định",
            ngaySinh: new Date("2002-12-12"),
            luong: 15000000,
            gioiTinh: 0
        },
        {
            hoTen: "Tạ Văn Định 2",
            ngaySinh: new Date("2022-12-12"),
            luong: 13000000,
            gioiTinh: 1
        },
        {
            hoTen: "Tạ Văn Định 3",
            ngaySinh: new Date("2013-12-12"),
            luong: 14000000,
            gioiTinh: 0
        },
        {
            hoTen: "Tạ Văn Định",
            ngaySinh: new Date("2013-12-12"),
            luong: 15000000,
            gioiTinh: 1
        },
        {
            hoTen: "Tạ Văn Định",
            ngaySinh: new Date("2013-12-12"),
            luong: 20000000,
            gioiTinh: 0
        },
    ];

    // Khai báo hàm
    $scope.sayHello = function ($name) {
        alert("Xin chào " + $name);
    }

    $scope.showMessage = function () {
        alert("Mãi bên nhau bạn nhé");
    }

    $scope.showTuoi = function ($date) {
        let tuoi = new Date().getFullYear() - $date.getFullYear();
        console.log(tuoi);
        if (tuoi < 18) {
            console.log("Đi tù");
        } else {
            console.log("Cưới thôi");
        }
    }
});