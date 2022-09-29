import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentsDataComponent } from './components/parents-data/parents-data.component';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent, ParentsDataComponent, DirectivesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
