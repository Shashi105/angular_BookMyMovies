import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean;
  last='giri';
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {


    this.registerForm=this.formBuilder.group
    ({

      firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/)]],
      lastName:[this.last,[Validators.required,Validators.minLength(2)]],
      address: this.formBuilder.group({
        street:[],
        city:[],
        zip:[]
      }),
      email:['',emailValidate]

    })

  }
  submit(){
    console.log(this.registerForm.value);
    console.log(this.registerForm.get('address.city').value);
  }
}


function emailValidate(c: FormControl) {

  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    return EMAIL_REGEXP.test(c.value) ? null:{

      emailInvalid:{
        message: "Invalid Format"
      }
    }
    
  }

