angular.module('sql-prototype')
    .service('UserManager', UserManagerService);


function UserManagerService($http){

    this.getAllUsers = function(handler){
        $http.get('api/allUsers')
            .success(handler);
    };

    this.getUser = function(name, handler){
        $http.get('api/findUser', {username: name})
            .success(handler);
    };

    this.addUser = function (name, pass, handler){
        $http.post('api/addUser', {username: name, password: pass})
            .success(handler);
    };

    this.removeUser = function (name, handler){
        $http.post('api/removeUser', { username: name })
            .success(handler);
    };

    this.updateUser = function(id, name, handler){
        $http.post('api/updateUsername', {id: id, username: name})
            .success(handler);
    };

}