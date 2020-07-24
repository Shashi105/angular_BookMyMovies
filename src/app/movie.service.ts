import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {Subject,BehaviorSubject} from 'rxjs';
import {Ilogin} from './login/login';
import {catchError}from 'rxjs/operators';
import {IMovies} from './movies-list/movies';
import {Itheatre} from './movie-details/theatre';
@Injectable({
  providedIn: 'root'
})



export class MovieService {

  
 
  movie_object:IMovies;
 
  registerations_url:string='/assets/Registrations.json';
  movies_url:string='/assets/Movies.json';
  chennai_url:string='/assets/Chennai-Theatre.json';
  chandigarh_url:string='/assets/Chandigarh-Theatre.json';
  bengaluru_url:string='/assets/Bengaluru-Theatre.json';
  place:string;

  private _movieObject=new BehaviorSubject<IMovies>(this.movie_object);
  movieDetails=this._movieObject.asObservable();
  
  private _getuser=new BehaviorSubject<string>('');
  _username=this._getuser.asObservable();

  private _getPlace=new BehaviorSubject<string>('');
  _place=this._getPlace.asObservable();

  constructor(private http:HttpClient) { }

  getRegisterations():Observable<Ilogin[]>{
    return this.http.get<Ilogin[]>(this.registerations_url).pipe(catchError(this.handleError));
  }

  getMovies():Observable<IMovies[]>{
    return this.http.get<IMovies[]>(this.movies_url).pipe(catchError(this.handleError));
  }

  getDetails(movie : IMovies){
      this.place=movie.place;
      this._movieObject.next(movie);
      console.log(this.place);
  }

  getTheatre():Observable<Itheatre[]>{
    if(this.place==="Chennai")
    return this.http.get<Itheatre[]>(this.chennai_url).pipe(catchError(this.handleError));

   else  if(this.place==="Chandigarh")
    return this.http.get<Itheatre[]>(this.chandigarh_url).pipe(catchError(this.handleError));

   else if(this.place==="Bengaluru")
    return this.http.get<Itheatre[]>(this.bengaluru_url).pipe(catchError(this.handleError));

    else
    return null;
  
  }

  getUser(username:string){
    this._getuser.next(username);
  }


  getPlace(place:string){
    this._getPlace.next(place);
  }


  private handleError (err: HttpErrorResponse){
    let errMsg:string="";
    if(err.error instanceof Error) //Client Side Error
    {
      console.log("An error occurred at client side",err.error.message);
      errMsg=err.error.message;
    }
    else{
      console.log("Backend Error Occured ${err.status}"); //Server Side error
      errMsg=err.error.status;
    }
    return throwError(errMsg);

  }

}
