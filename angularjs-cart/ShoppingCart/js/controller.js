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

function cardController($scope, $routeParams){
  $scope.$on('$viewContentLoaded', function () 
 {
   console.log("View complete");
   // javascript code here
  $('[data-numeric]').payment('restrictNumeric');
  $('.cc-number').payment('formatCardNumber');
  $('.cc-exp').payment('formatCardExpiry');
  $('.cc-cvc').payment('formatCardCVC');

  $("#sothe").val('4539 6647 8973 5862');
  $("#ngayhethan").val('9/2017');
  $("#macvv").val('378');
  $("#sotien").val('5000000');


  $('form').submit(function(e){
    e.preventDefault();
    $('input').removeClass('invalid');
    $('.validation').removeClass('passed failed');

    var cardType = $.payment.cardType($('.cc-number').val());

    $('.cc-number').toggleClass('invalid', !$.payment.validateCardNumber($('.cc-number').val()));
    $('.cc-exp').toggleClass('invalid', !$.payment.validateCardExpiry($('.cc-exp').payment('cardExpiryVal')));
    $('.cc-cvc').toggleClass('invalid', !$.payment.validateCardCVC($('.cc-cvc').val(), cardType));

    if ( $('input.invalid').length ) {
      $('.validation').addClass('failed');
    } else {
      $('.validation').addClass('passed');
    }
  });
 });
}