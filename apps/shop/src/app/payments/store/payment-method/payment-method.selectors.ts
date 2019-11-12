import { createFeatureSelector, createSelector } from '@ngrx/store'; 
import { paymentMethodFeatureKey, State } from './payment-method.reducer'; 
 
export const getPaymentMethodState = createFeatureSelector<State>(   
    paymentMethodFeatureKey 
); 
 
export const getPaymentMethodsList = createSelector(   
    getPaymentMethodState,   
    (state: State) => state.paymentMethods.list 
);
export const getPaymentMethodsListlEN = createSelector(   
    getPaymentMethodState,   
    (state: State) => state.paymentMethods.list.length
);
 
export const getPreferredPaymentMethod = createSelector(   
    getPaymentMethodState,   
    (state: State) => state.paymentMethods.preferred 
);