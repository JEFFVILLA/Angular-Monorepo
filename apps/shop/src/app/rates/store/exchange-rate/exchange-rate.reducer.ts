import { Action, createReducer, on } from '@ngrx/store';
import * as ExchangeRateActions from './exchange-rate.actions';

export const exchangeRateFeatureKey = 'exchangeRate';

export interface State {

}

export const initialState: State = {

};

const exchangeRateReducer = createReducer(
  initialState,

  on(ExchangeRateActions.loadExchangeRates, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return exchangeRateReducer(state, action);
}
