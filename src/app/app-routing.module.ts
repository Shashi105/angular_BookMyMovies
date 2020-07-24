import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MoviesListComponent} from './movies-list/movies-list.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


const routes: Routes = [
{path:'', redirectTo:'/login',pathMatch:'full'}, //Default Routes
{path:'login',component:LoginComponent},
{path:'movie-list',component:MoviesListComponent},
{path:'movie-list/:username',component:MoviesListComponent},
{path:'movie-details',component:MovieDetailsComponent},
{path:"**",component:NoPageFoundComponent} //WildCard to be at last and for non existing urls
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents=[LoginComponent,MovieDetailsComponent];