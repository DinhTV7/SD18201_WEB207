window.DetailStudentController = function ($scope, $http, $routeParams, $location) {
    $scope.title = "Thông tin chi tiết sinh viên";

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
}