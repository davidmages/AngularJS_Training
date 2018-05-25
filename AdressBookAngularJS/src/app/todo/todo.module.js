import UiRouterName from '@uirouter/angularjs';
import angular from 'angular';
import TodoListCtrlName from './todo-list/todo-list.controller';
import templateTodoList from './todo-list/todo-list.template.html';
import TodoAddComponentName from './todo-add/todo-add.component';
import TodoShowComponentName from './todo-show/todo-show.component';
import TodoServiceName from './todo.service';

const TodoModule = angular.module('todo/todo.module',[
  UiRouterName,
  TodoListCtrlName,
  TodoAddComponentName,
  TodoShowComponentName,
  TodoServiceName,
]);
TodoModule.config(function($stateProvider){
  $stateProvider.state({
    name: 'todos',
    url: '/todos',
    controller: 'TodoListCtrl',
    //template: '<h2>Liste de todo</h2>',
    template: templateTodoList,
  });

  $stateProvider.state({
    name: 'todos.add',
    url: '/add',
    //template: '<h2>Ajouter une todo</h2>',
    component: "todosAdd",
  });

  $stateProvider.state({
    name: 'todos.show',
    url: '/{id}',
    //template: '<h2>Ajouter une todo</h2>',
    component: 'todosShow',
  });
});

export default TodoModule.name;
