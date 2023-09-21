// Khởi tạo module
// Set angular cho vùng myApp
let dinh = angular.module('myApp', []); // Có 2 tham số (tên của ng-app, thành phần phụ thuộc)

// khởi tạo vùng controller
dinh.controller('demoController', myFunction);

function myFunction($scope) { // tham số scope luôn luôn phải có để render dữ liệu
    // Khai báo biến
    $scope.xinchao = "Hello world";
    // sau $scope là biến được khai báo để render dữ liệu

    console.log($scope.xinchao);
}
// dinh.controller('infoMe', myInfo);
// function myInfo ($scope) {
//     $scope.ten = "DinhTV7";
//     $scope.namsinh = "2004";
//     $scope.chuyennganh = "CNTT";
// }
dinh.controller('infoMe', function ($scope) {
    $scope.ten = "DinhTV7";
    $scope.namsinh = "2004";
    $scope.chuyennganh = "CNTT";

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Tạ Văn Định",
            namsinh: 2004,
            chuyennganh: "CNTT"
        },
        {
            ten: "DinhTV7",
            namsinh: 2004,
            chuyennganh: "CNTT"
        }
    ];
});