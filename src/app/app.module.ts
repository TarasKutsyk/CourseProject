import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeViewComponent } from './views/home-view/home-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';
import {CarouselModule} from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import {ImageModule} from 'primeng/image';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from "@angular/material/badge";
import {ChartModule} from 'primeng/chart';
import { ChartComponent } from './components/chart/chart.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { ContactsComponent } from './components/contacts/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    NotFoundComponent,
    CarouselComponent,
    ChartComponent,
    ProgressBarComponent,
    ContactViewComponent,
    CustomFormComponent,
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    CarouselModule,
    ImageModule,
    MatBadgeModule,
    ChartModule,
    NgCircleProgressModule.forRoot(),
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    DataViewModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
