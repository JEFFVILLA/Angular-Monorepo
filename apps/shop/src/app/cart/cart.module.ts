import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ItemPickerComponent } from './item-picker/item-picker.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: CartComponent }
];

@NgModule({
  declarations: [CartComponent, ItemPickerComponent, BasketListComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CartModule { }
