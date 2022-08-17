import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { HelloComponent } from './app/hello.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, FormsReactiveComponent],
  bootstrap: [
    /*AppComponent,*/
    FormsReactiveComponent,
  ],
})
export class AppModule {}
