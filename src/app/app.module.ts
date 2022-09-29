import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentsDataComponent } from './components/parents-data/parents-data.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent, ParentsDataComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
