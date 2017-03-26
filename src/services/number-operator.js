import {inject} from 'aurelia-framework';
import {NumberGenerator} from './number-generator'

@inject(NumberGenerator)
export class NumberOperator {

  counter = 0;

  constructor(numberGenerator){
    this.numberGenerator = numberGenerator;
  }

  getNumber(){
    return this.numberGenerator.getNumber() + this.counter++;
  }
}
