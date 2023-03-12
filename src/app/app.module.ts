import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodterComponent } from './foodter/foodter.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailPopupComponent } from './detail-popup/detail-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CardlistComponent } from './cardlist/cardlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodterComponent,
    LoginComponent,
    HomepageComponent,
    ItemdetailComponent,
    DetailPopupComponent,
    CardlistComponent,
    ProductlistComponent,
    RegisterComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
