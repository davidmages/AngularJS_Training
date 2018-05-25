import angular from 'angular';
import HorlogeComponentModuleName from './horloge/horloge.component';
const SharedModule = angular.module('Shared/shared.module',[
  HorlogeComponentModuleName
]);


export default SharedModule.name;

