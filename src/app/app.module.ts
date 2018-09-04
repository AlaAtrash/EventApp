import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventBlockComponent } from './event-block/event-block.component';


@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    AllEventsComponent,
    EventBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
