/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/logins");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('logins', {
            url: "/logins",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        .state('admin', {
            abstract: true,
            url: "/admin",
            templateUrl: "views/common/content.html",
        })
        .state('admin.home', {
            url: "/home",
            templateUrl: "views/home.html",
            data: { pageTitle: 'Home'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
        .state('admin.pos', {
            url: "/pos",
            templateUrl: "views/posSelectionScreen.html",
            data: { pageTitle: 'POS' }
        })
        .state('admin.posDetails', {
            url: "/pos_details",
            templateUrl: "views/posDetails.html",
            data: { pageTitle: 'POS' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/wow/wow.min.js']
                        },
                        {
                            name: 'cgNotify',
                            files: ['css/plugins/angular-notify/angular-notify.min.css','js/plugins/angular-notify/angular-notify.min.js']
                        }
                    ]);
                }
            }
        })

        .state('profile', {
            abstract: true,
            url: "/profile",
            templateUrl: "views/common/content.html",
        })
        .state('profile.setupProfile', {
            url: "/setup_profile",
            templateUrl: "views/ownerProfileSetup.html",
            data: { pageTitle: 'Profile'}
        })
        .state('profile.restaurantProfile', {
            url: "/restaurant_profile",
            templateUrl: "views/restaurantProfile.html",
            data: { pageTitle: 'Restaurant Profile'}
        })
        .state('profile.paymentProfile', {
            url: "/payment_profile",
            templateUrl: "views/paymentProfile.html",
            data: { pageTitle: 'Payment Profile'}
        })
        .state('profile.userSetup', {
            url: "/user_setup",
            templateUrl: "views/userSetup.html",
            data: { pageTitle: 'User Setup'}
        })
        .state('food', {
            abstract: true,
            url: "/food",
            templateUrl: "views/common/content.html",
        })
        .state('food.vendorSetup', {
            url: "/vendor_setup",
            templateUrl: "views/vendorSetup.html",
            data: { pageTitle: 'Vendor Setup'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
        .state('food.inventorySetup', {
            url: "/inventory_setup",
            templateUrl: "views/inventorySetup.html",
            data: { pageTitle: 'nventory Setup'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/footable/footable.all.min.js', 'css/plugins/footable/footable.core.css']
                        },
                        {
                            name: 'ui.footable',
                            files: ['js/plugins/footable/angular-footable.js']
                        }
                    ]);
                }
            }
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
