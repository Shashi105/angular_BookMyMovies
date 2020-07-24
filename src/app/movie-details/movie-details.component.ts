import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { IMovies } from '../movies-list/movies';
import { Itheatre } from './theatre';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  place:string="Chennai";
  user:string="shashi";
  movie:IMovies;
  theaters:Itheatre[]=[];
  theatre_selected:string;
  
  constructor(private movieservice:MovieService ) { }

  ngOnInit(): void {
   this.movieservice.movieDetails.subscribe(data =>
    {
      this.movie=data;
        },err => {  
      console.log(err);
  })   
  
  if( this.movieservice.getTheatre()!=null)
   this.movieservice.getTheatre().subscribe(data=>this.theaters=data,err=>console.log(err))
   console.log(typeof(this.theaters))
  
  }

  
}
