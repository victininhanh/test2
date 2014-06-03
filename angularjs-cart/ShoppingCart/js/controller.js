//'use strict';

// storeController 
// - store: danh sách sản phẩm
// - cart: cart
function storeController($scope, $routeParams, DataService) {

    // lấy từ service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // dùng routing để lấy product được chọn
    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
