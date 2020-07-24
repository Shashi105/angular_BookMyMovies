import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  user:string;

  title = 'BookMyMovies';

  constructor(private movieservice:MovieService ) { }

  
  ngOnInit(): void {
    this.movieservice._username.subscribe(data =>
     {
       this.user=data;
         },err => {  
       console.log(err);
   }
    )
  
  }


  setPlace(place:string)
  {
    this.movieservice.getPlace(place);
  }






}
