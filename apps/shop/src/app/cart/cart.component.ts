import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product, BasketItem } from './model/product.inteface';
import { HttpClient } from '@angular/common/http';
import { BasketService } from '../basket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-shop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  public products$:  Observable<Product[]>;
  public basket: Array<BasketItem> = [];
  constructor(private http: HttpClient, private basketService: BasketService) { }

  ngOnInit() {
    this.products$ = this.http.get<Product[]>('./assets/data/products.json');
    // this.http.get<Product[]>('./assets/data/products.json').subscribe({
    //   next: response => {
    //     this.products = response;
    //     console.log({products: this.products});
    //   }
    // });
  }

  public onAddItem(item: BasketItem){
    const itemIndex = this.getIndexofItem(item);
    if (itemIndex !== -1) {
      this.basket[itemIndex].units += item.units;
      this.basket = [...this.basket];
    } else {
      this.basket = [...this.basket, item];
    }
    this.onBasketChange();
  }

  public onRemoveItem(item: BasketItem){
    const itemIndex = this.getIndexofItem(item);
    if (itemIndex !== -1){
      this.basket = this.basket.filter(i => i.product._id !== item.product._id);
    }
    this.onBasketChange();
  }

  private getIndexofItem(item: BasketItem){
    return this.basket.findIndex(
      basketItem => basketItem.product._id === item.product._id
    );
  }

  private onBasketChange() {
    const totalUnits = this.basket.reduce(
      (total, item) => total + item.units,
      0
    );
    this.basketService.units$.next(totalUnits);
    this.basketService.basket$.next(this.basket);
  }


}
