import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl}  from '@angular/forms';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.css']
})
export class CustomerformComponent implements OnInit {

  customerForm:FormGroup;
  lastName="Giri";


  constructor(private formbBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.customerForm=this.formbBuilder.group({
      firstName:['',[Validators.required,Validators.pattern(/^[a-zA-z][a-zA-z]*$/)]],
      lastName:['Giri',[Validators.minLength(8),Validators.required]],
      age:['',Validators.required],
      dob:['',Validators.required],
      email:['',validateMail]
      
    })
    

  }


  submit(){

    console.log(this.customerForm.value);
    console.log(this.customerForm.get('lastName').value);
    
  }


}

function validateMail(c :FormControl){
  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    invalidEmail:{
      message:"Invalid Format!"
    }
  }

}