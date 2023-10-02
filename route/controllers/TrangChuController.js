window.TrangChuController = function ($scope) {
    $scope.title = "Đây là trang chủ";

    $scope.themMoi = function () {
        // Hiển thị toàn bộ dữ liệu form đẩy vào
        console.log($scope.inputValue);
        // Hiển thị chi tiết
        console.log($scope.inputValue.name);
        console.log($scope.inputValue.address);
    }

    $scope.tinhTong = function () {
        $scope.sum = parseFloat($scope.number.one) + parseFloat($scope.number.two);
    }

    $scope.checkLogin=function(){
        $scope.logged = false;
        if ($scope.user.pass == "thaydinhdz") {
            $scope.logged = true;
        }
        else{
            alert("Bạn nhập sai mật khẩu")
        }
    }

    $scope.count = 0;
    $scope.countClick = function () {
        $scope.count++;
    }
}