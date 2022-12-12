import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdtempdetComponent } from './updtempdet/updtempdet.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpdataComponent,
    AddnewempComponent,
    UpdtempdetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
