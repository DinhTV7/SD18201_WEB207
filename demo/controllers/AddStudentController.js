window.AddStudentController = function ($scope, $http, $location) {
    $scope.title = "Thêm thông tin sinh viên";

    $scope.addStudent = function () {
        // Link API
        const apiStudent = "http://localhost:3000/students";

        // Lấy dữ liệu nhập vào từ form
        let newStudent = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.couse
        }
        // console.log(newStudent);

        // Call api để thêm dữ liệu
        $http.post(
            apiStudent,// Link API
            newStudent // Dữ liệu muốn thêm
        ).then(function (response) {
            // console.log(response);
            if (response.status == 201) {
                // Di chuyển tảng 1 trang nào đó
                $location.path("trang-chu");
            }
        })
    }
}