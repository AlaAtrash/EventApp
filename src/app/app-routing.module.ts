import { NgModule } from '@angular/core';
import  {RouterModule, Routes } from '@angular/router';
import {MyAccountComponent} from './my-account/my-account.component';
import {AllEventsComponent} from './all-events/all-events.component';

export const routes: Routes = [
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'allevents', component: AllEventsComponent }
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
