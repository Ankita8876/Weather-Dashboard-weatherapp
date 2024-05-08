import { Component, NgModule } from '@angular/core'; 
// BrowserModule automatically imports all CommonModule Dependencies 

import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({ 
declarations: [ 
	AppComponent, 
], 
imports: [ 
	// Adding Imports 
	BrowserModule,
    Component,
    LeftContainerComponent,
    RightContainerComponent,
    HttpClientModule,
    HttpClient,
], 
schemas: [CUSTOM_ELEMENTS_SCHEMA],

providers: [], 
bootstrap: [AppComponent] 
}) 
export class AppModule { } 
