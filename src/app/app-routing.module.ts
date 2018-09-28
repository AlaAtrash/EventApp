import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MyAccountComponent} from './my-account/my-account.component';
import {AllEventsComponent} from './all-events/all-events.component';
import {CommentsComponent} from './comments/comments.component';
import {PaymentInfoComponent} from './payment-info/payment-info.component';
import {EventProposalComponent} from './event-proposal/event-proposal.component'



export const routes: Routes = [
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'allevents', component: AllEventsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'paymentinfo', component:PaymentInfoComponent},
  { path: 'eventproposal', component:EventProposalComponent}
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
