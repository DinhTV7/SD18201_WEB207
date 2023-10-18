window.EditStudentController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Chỉnh sửa thông tin sinh viên";
    $scope.titleDetail = "Chi tiết thông tin sinh viên";

    // $scope.gioiTinh = "Nữ";

    // Link API
    const apiStudent = "http://localhost:3000/students";

    // Lấy id của sinh viên từ URL
    let studentID = $routeParams.id;

    // Lấy thông tin chi tiết sinh viên
    $http.get(
        `${apiStudent}/${studentID}`
        // http://localhost:3000/students/id
    ).then(function (response) {
        // console.log(response.data);
        if (response.status == 200) {
            $scope.student = {
                editid: response.data.id,
                name: response.data.ten,
                year: response.data.namsinh,
                couse: response.data.chuyennganh
            }
        }
    })

    $scope.editStudent = function () {
        // Tạo 1 biến để kiểm tra
        let flag = true;

        // Kiểm tra từng trường dữ liệu
        $scope.kiemTra = {
            name: false,
            year: false,
            couse: false
        }

        // Kiểm tra dữ liệu nếu bỏ trống
        if (!$scope.student || !$scope.student.name) {
            flag = false;
            $scope.kiemTra.name = true;
        }

        if (!$scope.student || !$scope.student.year) {
            flag = false;
            $scope.kiemTra.year = true;
        }

        if (!$scope.student || !$scope.student.couse) {
            flag = false;
            $scope.kiemTra.couse = true;
        }

        // Kiểm tra xem đã điền đầy đủ thông tin chưa
        if (flag) {
            // Lấy dữ liệu nhập vào từ form
            let updateStudent = {
                ten: $scope.student.name,
                namsinh: $scope.student.year,
                chuyennganh: $scope.student.couse
            }
            // Call api để thêm dữ liệu
            $http.put(
                `${apiStudent}/${studentID}`,// Link API theo id
                updateStudent // Dữ liệu mới nhập vào từ input
            ).then(function (response) {
                // console.log(response);
                if (response.status == 200) {
                    // Di chuyển tảng 1 trang nào đó
                    $location.path("trang-chu");
                }
            })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin!");
        }
    }
}