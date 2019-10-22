import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductsModule } from '@angular-workspace/products';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CatalogComponent }
];

@NgModule({
  declarations: [CatalogComponent, ProductComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    RouterModule.forChild(routes),
    ProductsModule
  ]
})
export class CatalogModule { }
