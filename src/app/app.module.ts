import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

import { InicioComponent, SafeHtmlPipe } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    HeaderComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,      
    routing,
    DragScrollModule,
    NgxSkeletonLoaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
