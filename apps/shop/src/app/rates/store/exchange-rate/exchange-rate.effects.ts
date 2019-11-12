import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as ExchangeRateActions from './exchange-rate.actions';


@Injectable()
export class ExchangeRateEffects {


  loadExchangeRates$ = createEffect(() => this.actions$.pipe(
    ofType(ExchangeRateActions.loadExchangeRates),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
