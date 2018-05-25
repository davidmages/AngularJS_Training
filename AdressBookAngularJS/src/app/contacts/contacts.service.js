import angular from 'angular';

class ContactService{
  constructor($http){
    this.$http=$http;
  }
  getList(){
    //return this.$http.get('https://jsonplaceholder.typicode.com/users');
    return this.$http.get('http://localhost:3000/users');
  }

  getById(id){
    //return this.$http.get('https://jsonplaceholder.typicode.com/users/' + id);
    return this.$http.get('http://localhost:3000/users/' + id);
  }

  create(contact){
    //return this.$http.post('https://jsonplaceholder.typicode.com/users' , contact);
    return this.$http.post('http://localhost:3000/users' , contact);
  }
}
ContactService.$inject=['$http'];
const module = angular.module ('contacts/contacts.service',[]);
module.service('contactService', ContactService)
export default module.name;
