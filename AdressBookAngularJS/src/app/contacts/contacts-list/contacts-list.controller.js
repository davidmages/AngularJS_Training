import angular from 'angular';

const module = angular.module('contacts/contacts-list/contacts-list.controller', []);

class ContactListCtrl {
  constructor(contactService, $scope) {
    //console.log('ContactListCtrl');
    $scope.contacts = [];
    //$http.get('https://jsonplaceholder.typicode.com/users')
    contactService.getList()
      .then((res) => {
        //console.log(res.data);
        $scope.contacts = res.data;
      });
  }
}

// annoter les services (permet de minifier le code)
// version 1 :
ContactListCtrl.$inject = ['contactService', '$scope'];
module.controller('ContactListCtrl', ContactListCtrl);

// Version 2 :
//module.controller('ContactListCtrl', ['$http', '$scope', ContactListCtrl]);

export default module.name;

