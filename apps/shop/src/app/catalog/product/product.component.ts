import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '@angular-workspace/shared/domain';

@Component({
  selector: 'ab-shop-product',
  templateUrl: './product.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() public product: Product
  @Output() public buy = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
