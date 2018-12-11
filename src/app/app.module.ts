import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { UiModule } from './ui';
import { MatrimonyModule } from './matrimony';
import { AppCommonModule } from './common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserModule } from './user';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UiModule,
    MatrimonyModule,
    AppCommonModule,
    UserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
