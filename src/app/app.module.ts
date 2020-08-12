import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppComponent } from './app.component';

import { DictatorFormComponent } from './dictator-form/dictator-form.component';

@NgModule({
  declarations: [
    AppComponent,

    DictatorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
