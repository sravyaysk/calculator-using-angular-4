import { Component, OnInit } from '@angular/core';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})

export class TextfieldComponent implements OnInit {
  result: any;

  constructor() {
    this.result = "0";
  }

  displayResult(value){
    this.result=value;
    //alert("inside textfield component "+this.result);
  }

  ngOnInit() {
  }

}
