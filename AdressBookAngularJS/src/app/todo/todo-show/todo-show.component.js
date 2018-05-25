import angular from 'angular';
import template from './todo-show.template.html';

const TodosShowComponentModule = angular.module('todo/todo-show/todo-show.component',[]);

class TodosShowComponent{
  constructor(todoService, $state){
    todoService.getById($state.params.id)
    .then((res) => {
      this.todo = res.data;
    });
  }
}

TodosShowComponentModule.component('todosShow',{
  template:template,
  controller: TodosShowComponent,
});

export default TodosShowComponentModule.name;

