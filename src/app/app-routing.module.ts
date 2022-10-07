import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './heroes/pages/home/home.component';
import { ListComponent } from './heroes/pages/list/list.component';



const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then(m => m.HeroesModule )
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    //component: ErrorPageComponent
  redirectTo: '404'
  },
  {
    path: 'home',
    //component: ErrorPageComponent
  component: ListComponent,
 }
]


@NgModule({
  declarations: [],
/*principals routes*/
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,

  ]
})
export class AppRoutingModule { }
