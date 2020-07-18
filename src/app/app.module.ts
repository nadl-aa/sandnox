import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import {
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }