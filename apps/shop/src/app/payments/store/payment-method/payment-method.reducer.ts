import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentMethodActions from './payment-method.actions';
import { PaymentMethod, PaymentMethods } from './payment-method.model';

export const paymentMethodFeatureKey = 'paymentMethod';

export interface State {
  paymentMethods: PaymentMethods
  // invoices: [],
  // products: [],
  // custumers: any
}

export const initialState: State = {
paymentMethods: {list: [],preferred: null }
};

const paymentMethodReducer = createReducer(
  initialState,

  on(PaymentMethodActions.loadPaymentMethods, state => state),
  on(     
    PaymentMethodActions.loadPaymentMethodsSucess,     
    (state, { paymentMethodList }) => {       
      return {         
        ...state,         
        paymentMethods: { 
          ...state.paymentMethods, list: paymentMethodList }       
        };     
      }   
      ),   
  on(PaymentMethodActions.loadPaymentMethodsError, state => state),
  on(PaymentMethodActions.addPaymentMethod, (state, {newPaymentMethod}) => {
    return {
      ...state,
      paymentMethods: {
        ...state.paymentMethods,
        list: [...state.paymentMethods.list, newPaymentMethod]
      }
    }
  }),
  on(   
    PaymentMethodActions.selectPreferredPaymentMethod,   
    (state, { preferredId }) => {     
      return {       
        ...state,       
        paymentMethods: { ...state.paymentMethods, preferred: preferredId }
      };   
    }
    ),
    on(   
      PaymentMethodActions.setExpirationPaymentMethod,   
      (state, { updatedPaymentMethod }) => {     
        const list = state.paymentMethods.list;     
        const updatedlist = list.map(pM =>       
          pM.id === updatedPaymentMethod.id ? updatedPaymentMethod : pM     );     
          return {       
            ...state,       
            paymentMethods: {         
              ...state.paymentMethods,         
              list: updatedlist       
            }     
          };   
        } 
    )
);

export function reducer(state: State | undefined, action: Action) {
  return paymentMethodReducer(state, action);
}
