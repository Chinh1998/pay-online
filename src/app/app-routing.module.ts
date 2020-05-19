import { LoginComponent } from './../component/signup/login/login.component';
import { RegisterComponent } from './../component/signup/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
