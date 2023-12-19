import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './comp/loginpage/loginpage.component';
import { HeaderComponent } from './comp/header/header.component';
import { FooterComponent } from './comp/footer/footer.component';
import { FormsComponent } from './comp/forms/forms.component';
import { PagenotfoundpageComponent } from './comp/pagenotfoundpage/pagenotfoundpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    PagenotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
