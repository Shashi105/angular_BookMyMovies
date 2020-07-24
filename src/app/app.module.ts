import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MovieService}from './movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookMyMoviesComponent } from './book-my-movies/book-my-movies.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';
import { MousehoverDirective } from './mousehover.directive';
import { PlacefiltrPipe } from './placefiltr.pipe';
import { FormsComponent } from './forms/forms.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CustomerformComponent } from './customerform/customerform.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    BookMyMoviesComponent,
    CheckoutComponent,
    NoPageFoundComponent,
    SortPipe,
    SearchPipe,
    MousehoverDirective,
    PlacefiltrPipe,
    FormsComponent,
    RegisterformComponent,
    CustomerformComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
