import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from './store/payment-method/payment-method.model';
import { PaymentMethodService } from './store/payment-method/payment-methos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-shop-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  public paymentMethodsList$: Observable<PaymentMethod[]>;   
  public preferredPaymentMethod$: Observable<string>;
  public preferredPaymentMethodLen$: Observable<number>;
  constructor(private paymentMethodService: PaymentMethodService) {} 
 
  ngOnInit() {
    this.paymentMethodsList$ = this.paymentMethodService.getPaymentMethodsList$();     
    this.preferredPaymentMethod$ = this.paymentMethodService.getPreferredPaymentMethod$();
    this.preferredPaymentMethodLen$ = this.paymentMethodService.getPaymentMethodsListLen$();
    this.paymentMethodService.loadPaymentMethods();     
    const visa: PaymentMethod = {       id: '1234 7896 3214 6549',       expiration: new Date(2020, 6-1, 30)     };     
    this.paymentMethodService.addPaymentMethod(visa);     
    this.paymentMethodService.selectPreferredPaymentMethod(visa.id);     
    visa.expiration = new Date(2021, 12-1, 31);     
    this.paymentMethodService.setExpirationPaymentMethod(visa); 
  }

}
