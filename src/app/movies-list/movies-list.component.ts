import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IMovies} from './movies';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  user:string;
  movies:any[] ;
  errorMsg:any;
  place:string;
  searchText:string;
  sorting:string;

  
  

  constructor(private movieservice:MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.movieservice.getMovies().subscribe(
      data=>this.movies=data,
      error=>this.errorMsg=<any>error
    )
      this.route.paramMap.subscribe((params:ParamMap)=>
      this.user= params.get('username'));

      this.movieservice.getUser(this.user);

      this.movieservice._place.subscribe(data =>{this.place=data});
      
  }

  sendDetail(movie:IMovies){
 
    this.movieservice.getDetails(movie);

  }


}
