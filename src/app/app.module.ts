import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferFundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
