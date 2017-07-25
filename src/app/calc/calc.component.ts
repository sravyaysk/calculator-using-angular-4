import { Component, OnInit } from '@angular/core';
//import { TextfieldComponent } from 'app/textfield/textfield.component';
import { Injectable } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {
  current:any;
  //constructor(private tfcomponent:TextfieldComponent) {
    //this.current=this.btnscomponent.current;
    constructor(){
    this.current='';
    //this.calculate(this.current);
   }

   @Output() myNewEvent = new EventEmitter();
  calculate(value){
    //alert(value);
    //alert("inside calc comp "+value);
    if(value == 'C'){
      this.current='0';
    }
    else if(value == '='){
      this.current = eval(this.current);
    }
    else{
      if(this.current=='0'){
        this.current=value;
      }
      else{
      this.current=this.current+value;
    }
    }
    //alert("current "+this.current);
    this.myNewEvent.emit(this.current);
    //this.tfcomponent.displayResult(this.current);
  }
  ngOnInit() {
  }

}
