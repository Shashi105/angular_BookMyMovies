import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;
  valid:boolean=false;
    users: any[];
    errorMsg: any;

  

  constructor(private MovieService : MovieService, private router: Router) { }


  validate(){
    for (var i=0; i<this.users.length;i++){
      if(this.username===this.users[i].username && this.password===this.users[i].password){
        this.valid=true;
      }
    }
    if(this.valid)
      this.router.navigate(['/movie-list',this.username]);
    else{
      alert("Credentials didn't Match, Please try again later")
      // this.router.navigate(['/login']);
    }
     
  }

  ngOnInit(): void {
 
    this.MovieService.getRegisterations().subscribe(
      data => this.users=data,
      error => this.errorMsg=<any>error);
    
  }


}
