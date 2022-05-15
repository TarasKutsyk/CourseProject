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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    NotFoundComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    CarouselModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
