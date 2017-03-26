import {bindable} from 'aurelia-framework';

export class BindingChild {
  @bindable text = 'Text';

  textChanged(){
    // method executed on bindable fields onchange
    console.log('Text changed');
  }
}

