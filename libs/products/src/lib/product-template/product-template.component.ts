import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@angular-workspace/shared/domain';
@Component({
  selector: 'ab-products-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent implements OnInit {
  @Input() public product: Product;
  constructor() { }

  ngOnInit() {
  }

}
