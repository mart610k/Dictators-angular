import { Component, OnInit } from '@angular/core';
import { Dictator } from "../dictator";

@Component({
  selector: 'app-dictator-form',
  templateUrl: './dictator-form.component.html',
  styleUrls: ['./dictator-form.component.css']
})
export class DictatorFormComponent {

  constructor() { }

dictator : Dictator = new Dictator("","",null,"",null);

dictators : Dictator[]= [];

addDictator(){
  this.dictators.push(this.dictator);
  this.dictator = new Dictator("","",0,"",null);
  console.log(this.dictators.length);
}
get diagnostic(){
  return JSON.stringify(this.dictators);
}
removeDictator(dicatorIndex){
  console.log(dicatorIndex);
  this.dictators.splice(dicatorIndex,1); 
}
}
