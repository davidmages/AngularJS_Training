import angular from 'angular';

const module = angular.module('todo/todo-list/todo-list.controller', []);

class TodoListCtrl {
  constructor($http, $scope) {
    //console.log('TodoListCtrl');
    $scope.todos = [];
    $http.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        //console.log(res.data);
        $scope.todos = res.data;
      });
  }
}

// annoter les services (permet de minifier le code)
// version 1 :
TodoListCtrl.$inject = ['$http', '$scope'];
module.controller('TodoListCtrl', TodoListCtrl);

// Version 2 :
//module.controller('ContactListCtrl', ['$http', '$scope', ContactListCtrl]);

export default module.name;

