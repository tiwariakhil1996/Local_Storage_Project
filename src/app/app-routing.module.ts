import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoformComponent } from './demoform/demoform.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [

  { path: 'demoform', component: DemoformComponent },
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'demoform',component:DemoformComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
