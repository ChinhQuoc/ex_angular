import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShopService } from 'src/app/services/shop.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailModule } from 'src/app/product-detail/product-detail.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { CheckLoginGuard } from 'src/app/guard/check-login.guard';
import { CheckSaveFormGuard } from 'src/app/guard/check-save-form.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductDetailModule,
    ReactiveFormsModule
  ],
  providers: [
    ShopService,
    LoginService,
    CheckLoginGuard,
    CheckSaveFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
