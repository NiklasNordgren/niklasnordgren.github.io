import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRippleModule} from '@angular/material/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HomeComponent } from './home/home.component';
import { RootformComponent } from './rootform/rootform.component';
import { ContactComponent } from './contact/contact.component';
import { BusinessconceptComponent } from './businessconcept/businessconcept.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootformComponent,
    ContactComponent,
    BusinessconceptComponent,
    GdprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatDividerModule,
    PdfViewerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
