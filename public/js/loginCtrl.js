(function() {
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {
        //TODO validate & check here
        if ($scope.email.email == '123@123.123' && $scope.password == '123123') {
            console.log('success');
        } else {
            //...
        }

        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {


            $scope.user = r.data;
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
}]);
})();