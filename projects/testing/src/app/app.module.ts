import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgForRepeatModule } from 'ng-for-repeat';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NgForRepeatModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
