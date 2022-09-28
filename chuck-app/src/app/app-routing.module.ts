import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryJokeComponent } from './category-joke/category-joke.component';
import { HomeComponent } from './home/home.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'random',
  component: RandomJokeComponent
},{
  path: 'category',
  component: CategoryJokeComponent
},{
  path:'**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
