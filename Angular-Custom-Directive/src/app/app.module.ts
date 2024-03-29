import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomStylingDirective } from './directive/custom-styling.directive';
import { DynamicDirectiveDirective } from './directive/dynamic-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomStylingDirective,
    DynamicDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
