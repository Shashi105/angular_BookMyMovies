import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  registerForm: FormGroup;
  lastName='Giri';
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.registerForm=this.formbuilder.group({
      firstName:['',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z]*$/)]],
      lastName:[this.lastName,[Validators.required,Validators.minLength(8)]],
      address: this.formbuilder.group({
        street:[],
        zip:[],
        city:[]

      }),
      email:['',validateEmail]
    })

  
  

  }
  

  submit()
  {   
  console.log(this.registerForm.value);
  console.log(this.registerForm.get('firstName').value);
  console.log(this.registerForm.get('lastName').value);

  console.log(this.registerForm.get('address.zip').value);
  }


}

function validateEmail(c : FormControl) {

  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  return EMAIL_REGEXP.test(c.value)?  null:{
   emailInvalid:{
  message:"Invalid Fromat"
}

  }
  
}