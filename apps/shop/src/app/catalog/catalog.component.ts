import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '@angular-workspace/shared/domain';

@Component({
  selector: 'ab-shop-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalog$: Observable<Product[]>;   
  constructor(private http: HttpClient) {}   
  ngOnInit() {     
    this.catalog$ = this.http.get<Product[]>('./assets/data/products.json');   
  }
}
