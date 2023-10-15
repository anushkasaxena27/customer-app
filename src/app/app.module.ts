import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { UpdateComponent } from './components/update/update.component';
import { CarouselModule } from 'primeng/carousel';
import { CustomerManagerComponent } from './components/customer-manager/customer-manager.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AddNewComponent,
    UpdateComponent,
    CustomerManagerComponent,
    ViewCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    RouterModule, 
    CarouselModule,SidebarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
