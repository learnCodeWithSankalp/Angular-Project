import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@Angular/forms'
import { serverComponent } from './server/server.component';
import { Server2Component } from './server2/server2.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    Server2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
