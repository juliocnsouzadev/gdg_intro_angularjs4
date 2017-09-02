import { StudentsModule } from './students/students.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp01Component } from './comp01/comp01.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp01Component
  ],
  imports: [
    BrowserModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
