
/**
 * MainCtrl - controller
 * Contains several global data used in different view
 *
 */
function MainCtrl($http, $uibModal, $scope) {
    this.posIndex = 2;
    this.isRestaurantSelected = false;
    this.changeFirstDashboaed = false;
    this.usersList = [];
    this.vendorsList = [{
        id:121,
        name:'test',
        city:'City',
        date: '12/12/12',
        zip : '123',
        selected:false
    },
        {
            id:122,
            name:'test',
            city:'City',
            date: '12/12/12',
            zip : '123',
            selected:false
        },
        {
            id:1241,
            name:'test',
            city:'City',
            date: '12/12/12',
            zip : '123',
            selected:false
        },
        {
            id:1621,
            name:'test',
            city:'City',
            date: '12/12/12',
            zip : '123',
            selected:false
        },
        {
            id:1821,
            name:'test',
            city:'City',
            date: '12/12/12',
            zip : '123',
            selected:false
        }];

    this.selectedVendors = [{
        id:121,
        name:'test',
        city:'City',
        date: '12/12/12',
        zip : '123',
        selected:false
    },
        {
            id:122,
            name:'test',
            city:'City',
            date: '12/12/12',
            zip : '123',
            selected:false
        }];

    this.inventoryList = [{
        id:18321,
        name:'test',
        desc:'description',
        selected:false
    },
        {
            id:14821,
            name:'test',
            desc:'description',
            selected:false
        },
        {
            id:15821,
            name:'test',
            desc:'description',
            selected:false
        },
        {
            id:17821,
            name:'test',
            desc:'description',
            selected:false
        },
        {
            id:18821,
            name:'test',
            desc:'description',
            selected:false
        }]

    this.selectBlock = function(val){
        this.posIndex = val;
    };

    this.selectRestaurant = function(){
        this.isRestaurantSelected = true;
    };

    this.logout = function(){
        this.posIndex = 2;
        this.isRestaurantSelected = false;
        this.changeFirstDashboaed = false;
    };

    this.reset = function(){
        this.posIndex = 2;
        this.isRestaurantSelected = false;
        this.changeFirstDashboaed = false;
    }



    this.open2 = function (self) {
        if (!self.usersList)
            self.usersList = [];

        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/add_new_user_item.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated fadeIn",
            controllerAs: 'vm',
            resolve: {
                user: function(){
                    return null;
                }
            }
        });

        modalInstance.result.then(function(result) {
            self.usersList.push(result);
            }, function(reason) {

            });
        };


    this.open3 = function (self) {
        if (!self.usersList)
            self.usersList = [];

        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/invite_new_user_item.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated fadeIn",
            controllerAs: 'vm',
            resolve: {
                user: function(){
                    return null;
                }
            }
        });

        modalInstance.result.then(function(result) {
            self.usersList.push(result);
        }, function(reason) {

        });
    };

    this.editUser = function(self, user, index){
        self.usersList.splice(index, 1);
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/add_new_user_item.html',
            controller: ModalInstanceCtrl,
            windowClass: "animated fadeIn",
            controllerAs: 'vm',
            resolve: {
                user: function(){
                    return user;
                }
            }
        });

        modalInstance.result.then(function(result) {
            self.usersList.push(result);
        }, function(reason) {

        });
    };

    this.deleteUser = function(self, index){
        self.usersList.splice(index, 1);
    }

    this.where = function(){
        alert('Where does this button lead?');
    }

    this.willBe = function(){
        alert('It will work if number of vendors > 1');
    }
};

function notifyCtrl($scope, notify, $state) {
    $scope.inspiniaTemplate = 'views/common/notify.html';
    $scope.inspiniaDemo1 = function(){
        notify({ message: 'Thank you! We will contact you soon', classes: 'alert-info', templateUrl: $scope.inspiniaTemplate});
        $state.go('admin.home');
    }

}


function ModalInstanceCtrl ($scope, $uibModalInstance, user) {

    this.user = user;
    $scope.ok = function (user) {
        $uibModalInstance.close(user);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};

/**
 *
 * Pass all functions into module
 */
angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl).controller('notifyCtrl', notifyCtrl);

