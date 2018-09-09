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
    CommentBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
