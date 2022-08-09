import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component'


@NgModule({
 imports: [
  BrowserModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
    {path: '', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shipping', component: ShippingComponent},


  ]),
  BrowserAnimationsModule,
  HttpClientModule
 ],
 declarations: [
  AppComponent,
  TopBarComponent,
  ProductListComponent,
  ProductAlertComponent,
  ProductDetailComponent,
  CartComponent,
  ShippingComponent
 ],
 bootstrap: [
  AppComponent,
]
})

export class AppModule { }
