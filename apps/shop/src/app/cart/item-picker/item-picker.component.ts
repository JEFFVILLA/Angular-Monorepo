import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product, BasketItem } from '../model/product.inteface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ab-shop-item-picker',
  templateUrl: './item-picker.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPickerComponent implements OnInit {
  @Input() public products: Product[];
  @Output() public addItem = new EventEmitter<BasketItem>();
  public pickerFormGroup: FormGroup;
  private configuration = {
    timeoutBackground: 0 * 1000,
    useCDR: false
  };
  constructor() { }

  ngOnInit() {
    this.pickerFormGroup = new FormGroup({
      product: new FormControl(this.products[0]),
      units: new FormControl(0,[Validators.min(1)])
    });
  }

  public onAddItem() {
    const basketItem = new BasketItem();
    basketItem.product = this.pickerFormGroup.value.product;
    basketItem.units = this.pickerFormGroup.value.units;
    this.addItem.next(basketItem);
  }

}
