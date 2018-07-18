import { NgModule } from '@angular/core';
import  {RouterModule, Routes } from '@angular/router';
import {MyAccountComponent} from './my-account/my-account.component';

export const routes: Routes = [
  { path: 'myaccount', component: MyAccountComponent }
];

@NgModule({
  
  imports : [
  	RouterModule.forRoot(routes) 
  ],

  exports: [
  	RouterModule,
  ]
  
})
export class AppRoutingModule { }
