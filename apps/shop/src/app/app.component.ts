import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'ab-shop-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'shop';
  public basketUnits = 0;
  public basket = [];

  constructor( private basketService: BasketService){

  }

  ngOnInit(): void {
    this.basketService.units$.subscribe({
      next: units => {
        this.basketUnits = units;
        console.log(this.basketUnits);
      }
    });
    this.basketService.basket$.subscribe({
      next: basket => {
        this.basket = basket;
        console.log(this.basket);
      }
    });
  }
  public getNumItems() {
    return this.basket.length;
  }
}
