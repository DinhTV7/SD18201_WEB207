window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";
    let id = $routeParams.id;
    console.log(id);

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

    $scope.createStudent = function () {
        // Lấy dữ liệu từ input
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.couse
        }
        // Thêm thông tin nhập tư ô inout vào mảng
        $scope.students.push(newStudent);
    }
}