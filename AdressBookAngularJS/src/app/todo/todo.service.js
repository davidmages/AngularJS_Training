import angular from 'angular';

class TodoService{
  constructor($http){
    this.$http=$http;
  }
  getList(){
    //return this.$http.get('https://jsonplaceholder.typicode.com/todos');
    return this.$http.get('http://localhost:3000/todos');
  }

  getById(id){
    //return this.$http.get('https://jsonplaceholder.typicode.com/todos/' + id);
    return this.$http.get('http://localhost:3000/todos/' + id);
  }

  create(todo){
    //return this.$http.post('https://jsonplaceholder.typicode.com/todos' , contact);
    return this.$http.post('http://localhost:3000/todos' , title);
  }
}
TodoService.$inject=['$http'];
const module = angular.module ('todo/todo.service',[]);
module.service('todoService', TodoService)
export default module.name;
