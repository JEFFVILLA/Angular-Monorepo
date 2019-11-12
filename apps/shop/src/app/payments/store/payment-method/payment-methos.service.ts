import { Injectable } from '@angular/core'; import { Store } from '@ngrx/store'; 
import * as PaymentMethodActions from './payment-method.actions';
import * as PaymentMethodSelectors from './payment-method.selectors'; 
import {   PaymentMethod, PaymentMethods } from './payment-method.model';
import { Observable } from 'rxjs';
@Injectable({   providedIn: 'root' }) export class PaymentMethodService {   
    constructor(private store: Store<PaymentMethods>) {}
    
    public loadPaymentMethods() {   
        this.store.dispatch(PaymentMethodActions.loadPaymentMethods()); 
    } 
    public addPaymentMethod(newPaymentMethod: PaymentMethod) {     
        this.store.dispatch(       
            PaymentMethodActions.addPaymentMethod({         
                newPaymentMethod: { ...newPaymentMethod }       })     
                );   
    } 
    public selectPreferredPaymentMethod(preferredId: string) {   
        this.store.dispatch(     
            PaymentMethodActions.selectPreferredPaymentMethod({ preferredId })   
            ); 
    } 
    public setExpirationPaymentMethod(updatedPaymentMethod: PaymentMethod) {   
        this.store.dispatch(     
            PaymentMethodActions.setExpirationPaymentMethod({       
                updatedPaymentMethod: { ...updatedPaymentMethod }     })   
                );
    }

    public getPaymentMethodsList$(): Observable<PaymentMethod[]> {     
        return this.store.select(PaymentMethodSelectors.getPaymentMethodsList);   }
        public getPaymentMethodsListLen$(): Observable<number> {     
            return this.store.select(PaymentMethodSelectors.getPaymentMethodsListlEN);   } 
 
    public getPreferredPaymentMethod$(): Observable<string> {     
        return this.store.select(PaymentMethodSelectors.getPreferredPaymentMethod);   } 
4
}