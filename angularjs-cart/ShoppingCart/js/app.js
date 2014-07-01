//'use strict';

// App Module
var storeApp = angular.module('AngularStore', ['ngRoute','routeStyles']).
  config(['$routeProvider', function($routeProvider) { // chuyen trang
  $routeProvider.
      when('/store', {
        templateUrl: 'partials/store.htm',
        controller: 'storeController'
      }).
      when('/products/:productSku', {
        templateUrl: 'partials/product.htm',
        controller: 'storeController',
      }).
      when('/cart', {
        templateUrl: 'partials/shoppingCart.htm',
        controller: 'storeController',
      }).
      when('/card', {
        templateUrl: 'partials/card.htm',
        controller: 'cardController',
        css: ['css/card.css'],
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// tạo DataService đễ xử lý dữ liệu cart trong tất cả View
storeApp.factory("DataService", function () {

    // tạo store
    var myStore = new store();

    // tạo shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "paypaluser@youremail.com");
  

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with Google Wallet, you have to create a merchant account with 
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "xxxxxxx",
        {
            ship_method_name_1: "UPS Next Day Air",
            ship_method_price_1: "20.00",
            ship_method_currency_1: "USD",
            ship_method_name_2: "UPS Ground",
            ship_method_price_2: "15.00",
            ship_method_currency_2: "USD"
        }
    );

    // enable Stripe checkout
    // note: the second parameter identifies your publishable key; in order to use the 
    // shopping cart with Stripe, you have to create a merchant account with 
    // Stripe. You can do that here:
    // https://manage.stripe.com/register
    myCart.addCheckoutParameters("Stripe", "pk_test_xxxx",
        {
            chargeurl: "https://localhost:1234/processStripe.aspx"
        }
    );
    // Xu ly The Tin Dung
    myCart.addCheckoutParameters("CreditCard", "pk_test_xxxx",
        {
            chargeurl: "#"
        }
    );
  
  
    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});