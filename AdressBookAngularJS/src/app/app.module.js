import angular from 'angular';
import SharedModuleName from './shared/shared.module';
import ContactModuleName from './contacts/contacts.module';
import TodoModuleName from './todo/todo.module';



const AppModule = angular.module('app.module',[
  SharedModuleName,
  ContactModuleName,
  TodoModuleName
]);



export default AppModule.name;

