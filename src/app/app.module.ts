import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventBlockComponent } from './event-block/event-block.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventChartComponent } from './event-chart/event-chart.component';
import { EventFoodDesiredComponent } from './event-food-desired/event-food-desired.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentBlockComponent } from './comment-block/comment-block.component';
import { MainIngredientComponent } from './main-ingredient/main-ingredient.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MakeBudgetComponent } from './make-budget/make-budget.component';
import { MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { EventProposalComponent } from './event-proposal/event-proposal.component';
import { ProposalBlockComponent } from './proposal-block/proposal-block.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { PersonalBudgetComponent } from './personal-budget/personal-budget.component';
import { OrderListComponent } from './order-list/order-list.component';







@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    AllEventsComponent,
    EventBlockComponent,
    EventDetailComponent,
    EventChartComponent,
    EventFoodDesiredComponent,
    CommentsComponent,
    CommentBlockComponent,
    MainIngredientComponent,
    MakeBudgetComponent,
    PaymentInfoComponent,
    EventProposalComponent,
    ProposalBlockComponent,
    MenuDetailsComponent,
    PersonalBudgetComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
