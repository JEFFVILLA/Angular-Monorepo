import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '@angular-workspace/shared/ui';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'cart',
          loadChildren: () =>
            import('./cart/cart.module').then(m => m.CartModule)
        },
        {
          path: 'catalog',
          loadChildren: () =>
            import('./catalog/catalog.module').then(m => m.CatalogModule)
        },
      { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
      { path: 'rates', loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule) }
      ],
      { initialNavigation: 'enabled' }
    ),
    UiModule,
    HttpClientModule,
    StoreModule.forRoot(
      {router: routerReducer},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
