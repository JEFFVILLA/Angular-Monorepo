export interface Product {
    _id: string;
    description: string;
    category: 'Computer' | 'Printer';
    brand: string;
    price: number;
    stock: number;
}

export interface IBasketItem{
    product: Product;
    units: number;
}
export class BasketItem implements IBasketItem {
    product: Product;
    private _units: number;
    get units() {
      return this._units;
    }
    set units(value) {
      this._units = value;
    }
  }