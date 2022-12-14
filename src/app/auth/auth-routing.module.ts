import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';
//children routes via lazy loading
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
     ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
],
exports: [
  RouterModule,
]
})
export class AuthRoutingModule { }
