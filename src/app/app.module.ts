import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutLoaderComponent } from './loader/donut-loader/donut-loader.component';
import { BouncingLoaderComponent } from './loader/bouncing-loader/bouncing-loader.component';
import { NewtonLoaderComponent } from './loader/newton-loader/newton-loader.component';
import { DiceyLoaderComponent } from './loader/dicey-loader/dicey-loader.component';
import { BarLoaderComponent } from './loader/bar-loader/bar-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutLoaderComponent,
    BouncingLoaderComponent,
    NewtonLoaderComponent,
    DiceyLoaderComponent,
    BarLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
