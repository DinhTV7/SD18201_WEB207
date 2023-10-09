window.ListStudentController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Thực hiện call API để lấy dữ liệu
    // $http là 1 giao thức để call API

    // Định nghĩa đường dẫn API mà mình mong muốn
    const apiStudents = "http://localhost:3000/students";

    // Sử dụng $http.phương thức truy cập HTTP
    $http.get(apiStudents).then(function (response) {
        console.log(response);
        // Truy cập lấy toàn bộ dữ liệu
        console.log(response.data);

        if (response.status == 200) {
            $scope.listStudents = response.data;
        }
    })

    // Hàm xóa thông tin sinh viên
    $scope.deleteStudent = function (deleteID) {
        let confirm = window.confirm("Bạn có muốn xóa không ???");
        if (confirm) {
            $http.delete(
                `${apiStudents}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Bạn đã xóa thành công !");
                }
            })
        }
    }
}