import {NumberOperator} from './number-operator';
import {inject} from 'aurelia-framework';

@inject(NumberOperator)
export class Services {
  constructor(numberOperator){
    this.number = numberOperator.getNumber();
  }
}

