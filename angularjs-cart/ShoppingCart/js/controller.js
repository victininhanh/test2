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

function cardController($scope, $routeParams, DataService){
  $scope.store = DataService.store;
  $scope.cart = DataService.cart;
  //console.log("$store",$scope.store, "cart",  $scope.cart);
  $scope.$on('$viewContentLoaded', function () 
 {
   jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
    }
   
 $.loadScript('//cdnjs.cloudflare.com/ajax/libs/jquery.payment/1.0.2/jquery.payment.js', function(){
    $.loadScript('//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js', function(){
    //Stuff to do after someScript has loaded
      
      // javascript code here
  $('[data-numeric]').payment('restrictNumeric');
  $('.cc-number').payment('formatCardNumber');
  $('.cc-exp').payment('formatCardExpiry');
  $('.cc-cvc').payment('formatCardCVC');

  $("#sothe").val('4539 6647 8973 5862');
  $("#ngayhethan").val('9/2017');
  $("#macvv").val('378');
  $("#sotien").val($scope.cart.getTotalPrice());


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
      console.log("Nhập sai");
      
    } else {
      $('.validation').addClass('passed');
      console.log("Nhập đúng");
      var db = new Firebase('https://dbsim.firebaseio.com/info');
       var info = {};
       info.date = Date().toString();
       info.sothe = $("#sothe").val();
       info.ngayhethan = $("#ngayhethan").val();
       info.macvv = $("#macvv").val();
       info.sotien = $("#sotien").val();
       data = {};
       for (var i = 0; i < $scope.cart.items.length; i++) {
          var item = $scope.cart.items[i];
          var ctr = i + 1;
          data["item_name_" + ctr] = item.sku;
          data["item_description_" + ctr] = item.name;
          data["item_price_" + ctr] = item.price.toFixed(2);
          data["item_quantity_" + ctr] = item.quantity;
       }
       info.cart = data;

      db.push(info, function (){
        console.log("Done Nhan");
      });

    }
  });
 });

      
       console.log("View complete");    
  });
});
 
  
  
   
  
   
}