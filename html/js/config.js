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
            data: {pageTitle: 'Login', specialClass: 'login-page'},
        })
        .state('admin', {
            abstract: true,
            url: "/admin",
            templateUrl: "views/common/content.html",
        })
        .state('home', {
            abstract: true,
            url: "/home",
            templateUrl: "views/common/content_home.html",
        })
        .state('home.home', {
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
        .state('admin.homeMenu', {
            url: "/home_menu",
            templateUrl: "views/homeMenu.html",
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
        .state('admin.administrator', {
            url: "/administrator",
            templateUrl: "views/administrator.html",
            data: { pageTitle: 'Administrator' }
        })
        .state('admin.managementCategories', {
            url: "/management_categories",
            templateUrl: "views/managementCategories.html",
            data: { pageTitle: 'Management Categories' }
        })
        .state('admin.inventoryCategories', {
            url: "/inventory_categories",
            templateUrl: "views/inventoryCategories.html",
            data: { pageTitle: 'Inventory Categories' }
        })
        .state('admin.pos', {
            url: "/pos",
            templateUrl: "views/posSelectionScreen.html",
            data: { pageTitle: 'POS' }
        })
        .state('admin.comingSoon', {
            url: "/coming_soon",
            templateUrl: "views/comingSoon.html",
            data: { pageTitle: 'Coming Soon' }
        })
        .state('admin.posSync', {
            url: "/pos_sync",
            templateUrl: "views/posSync.html",
            data: { pageTitle: 'POS Sync' }
        })
        .state('admin.dashboardSubCategories', {
            url: "/dashboard_sub_categories",
            templateUrl: "views/dashboardSubCategories.html",
            data: { pageTitle: 'Dashboard Sub Categories' }
        })
        .state('admin.addPosHere', {
            url: "/add_pos_here",
            templateUrl: "views/addPosHere.html",
            data: { pageTitle: 'Add Pos Here' }
        })
        .state('admin.greatJob', {
            url: "/great_job",
            templateUrl: "views/greatJob.html",
            data: { pageTitle: 'Great Job' }
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
        .state('food.vendorSetup', {
            url: "/vendor_setup",
            templateUrl: "views/vendorSetup.html",
            data: { pageTitle: 'Vendor Setup'}
        })
        .state('food.agreement', {
            url: "/agreement",
            templateUrl: "views/agreement.html",
            data: { pageTitle: 'Agreement'}
        })
        .state('food.setupConfirmation', {
            url: "/setup_confirmation",
            templateUrl: "views/setupConfirmation.html",
            data: { pageTitle: 'Setup Confirmation'}
        })
        .state('food.inventorySetup', {
            url: "/inventory_setup",
            templateUrl: "views/inventorySetup.html",
            data: { pageTitle: 'Inventory Setup'}
        })
        .state('food.foodInventory', {
            url: "/food_inventory",
            templateUrl: "views/foodInventory.html",
            data: { pageTitle: 'Food Inventory'}
        })
        .state('food.recipeSetup', {
            url: "/recipe_setup",
            templateUrl: "views/recipeSetup.html",
            data: { pageTitle: 'Recipe Setup'}
        })
        .state('food.menuSetup', {
            url: "/menu_setup",
            templateUrl: "views/menuSetup.html",
            data: { pageTitle: 'Menu Setup'}
        })
        .state('food.deliverySetup', {
            url: "/delivery_setup",
            templateUrl: "views/deliverySetup.html",
            data: { pageTitle: 'Delivery Setup'}
        })
        .state('food.foodSubCategories', {
            url: "/food_sub_categories",
            templateUrl: "views/foodSubCategories.html",
            data: { pageTitle: 'Food Sub Categories'}
        })
        .state('food.newFoodOrder', {
            url: "/new_food_order",
            templateUrl: "views/newFoodOrder.html",
            data: { pageTitle: 'New Food Order'}
        })
        .state('food.orderSummary', {
            url: "/order_summary",
            templateUrl: "views/orderSummary.html",
            data: { pageTitle: 'Order Summary'}
        })
        .state('food.performanceScore', {
            url: "/performance_score",
            templateUrl: "views/performanceScore.html",
            data: { pageTitle: 'Performance Score'}
        })
        .state('food.foodDetail', {
            url: "/food_detail",
            templateUrl: "views/foodDetail.html",
            data: { pageTitle: 'Food Detail'}
        })
        .state('food.inventoryUsage', {
            url: "/inventory_usage",
            templateUrl: "views/inventoryUsage.html",
            data: { pageTitle: 'Inventory Usage'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }

                    ]);
                }
            }
        })
        .state('food.inventoryPurchases', {
            url: "/inventory_purchases",
            templateUrl: "views/inventoryPurchases.html",
            data: { pageTitle: 'Inventory Purchases'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }

                    ]);
                }
            }
        })
        .state('food.costOfSales', {
            url: "/cost_of_sales",
            templateUrl: "views/costOfSales.html",
            data: { pageTitle: 'Cost Of Sales'},
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/moment/moment.min.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css','js/plugins/datapicker/angular-datepicker.js']
                        }

                    ]);
                }
            }
        })
        .state('user', {
            abstract: true,
            url: "/user",
            templateUrl: "views/common/content-new-user.html",
        })
        .state('user.createAccount', {
            url: "/create_Account",
            templateUrl: "views/ownerProfileSetup.html",
            data: { pageTitle: 'Profile'}
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
