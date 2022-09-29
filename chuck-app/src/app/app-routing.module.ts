import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoryJokeComponent } from './category-joke/category-joke.component';
import { HomeComponent } from './home/home.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'random',
  component: RandomJokeComponent,
  canActivate: [AuthGuard]
},{
  path: 'category/:id',
  component: CategoryJokeComponent,
  // children: [{
  //   path: 'blabla',
  //   component: RandomJokeComponent
  // }]
},{
  path:'details',
  loadChildren: () => import('./details-joke/details-joke.module').then(m => m.DetailsJokeModule)
},
{
  path:'**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
