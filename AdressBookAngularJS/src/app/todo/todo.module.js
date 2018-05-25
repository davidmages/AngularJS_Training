import UiRouterName from '@uirouter/angularjs';
import angular from 'angular';
import TodoListCtrlName from './todo-list/todo-list.controller';
import templateTodoList from './todo-list/todo-list.template.html';


const TodoModule = angular.module('todo/todo.module',[
  UiRouterName,
  TodoListCtrlName,
]);
TodoModule.config(function($stateProvider){
  $stateProvider.state({
    name: 'todo-list',
    url: '/todo',
    controller: 'TodoListCtrl',
    //template: '<h2>Liste de todo</h2>',
    template: templateTodoList,
  });

  $stateProvider.state({
    name: 'todo-add',
    url: '/todo/add',
    template: '<h2>Ajouter une todo</h2>',
  });
});

export default TodoModule.name;

