(function() {
    angular.module('config', []).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller:"HomeTabCtrl"
                    }
                }
            })
            .state('tabs.shopping', {
                url: "/shopping",
                views: {
                    'home-tab': {
                        templateUrl: "templates/shopping.html"
                    }
                }
            })
            .state('tabs.life', {
                url: "/life",
                views: {
                    'life-tab': {
                        templateUrl: "templates/life.html",
                        controller:"LifeTabCtrl"
                    }
                }
            })
            .state('tabs.find', {
                url: "/find",
                views: {
                    'find-tab': {
                        templateUrl: "templates/find.html"
                    }
                }
            })
            .state('tabs.my', {
                url: "/my",
                views: {
                    'my-tab': {
                        templateUrl: "templates/my.html"
                    }
                }
            })
            .state('tabs.findXiangqing', {
                url: "/findXiangqing",
                views: {
                    'find-tab': {
                        templateUrl: "templates/findXiangqing.html"
                    }
                }
            });

        $urlRouterProvider.otherwise("/tab/home");

    })
})();
