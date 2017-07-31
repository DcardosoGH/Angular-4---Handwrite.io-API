import { FormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdSelectModule, MdGridListModule, MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';




import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdGridListModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSelectModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
