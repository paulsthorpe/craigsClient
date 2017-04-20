import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationSelectComponentComponent } from './location-select-component/location-select-component.component';
import { CategoriesComponentComponent } from './categories-component/categories-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationSelectComponentComponent,
    CategoriesComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
