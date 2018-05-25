import UiRouterName from '@uirouter/angularjs';
import angular from 'angular';
import ContactListCtrlName from './contacts-list/contacts-list.controller';
import templateContactList from './contacts-list/contacts-list.template.html';
import ContactAddComponentName from './contacts-add/contacts-add.component';
import ContactShowComponentName from './contacts-show/contacts-show.component';
import ContactServiceName from './contacts.service';

const ContactsModule = angular.module('contacts/contacts.module',[
  UiRouterName,
  ContactListCtrlName,
  ContactAddComponentName,
  ContactShowComponentName,
  ContactServiceName,
]);
ContactsModule.config(function($stateProvider){
  $stateProvider.state({
    name: 'contacts', //nom de la route
    url: '/contacts',
    controller: 'ContactListCtrl',
    //template: '<h2>Liste de contacts</h2>',
    template: templateContactList,
  });

  $stateProvider.state({
    name: 'contacts.add',
    url: '/add',
    //template: '<h2>Ajouter un contact</h2>',
    component: 'contactsAdd',
  });
  $stateProvider.state({
    name: 'contacts.show',
    url: '/{id}',
    //url: '/show',
    //template: '<h2>Voir un contact</h2>',
    component: 'contactsShow',
  });
});

export default ContactsModule.name;

