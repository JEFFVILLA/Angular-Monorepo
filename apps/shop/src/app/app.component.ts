import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from './basket.service';
import { SwUpdate, SwPush } from '@angular/service-worker';

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

  constructor( private basketService: BasketService,
    private swUpdate: SwUpdate,
    private swPush: SwPush){

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
    this.checkVersionUpdates();
  }
  public getNumItems() {
    return this.basket.length;
  }

  private checkVersionUpdates() {   
    if (this.swUpdate.isEnabled) {     
      this.swUpdate.checkForUpdate().then(data => console.log(data));
      this.swUpdate.available.subscribe(event => {

        if (event.current.appData) {         
          const appData: any = event.current.appData;         
          let msg = `New version ${appData.version} available.`;         
          msg += `${appData.changelog}.`;         
          msg += 'Reaload now?';         
          if (confirm(msg)) {          
            window.location.reload();         
          }       
        }     
      });   
    } 
  }

  private subscribeToNotifications() {     
    if (this.swPush.isEnabled) {       
      this.swPush         
      .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })         
      .then(sub => {           
        console.log('subscription to server', sub.toJSON());           
        this.swPush.messages.subscribe(msg => console.log('Received: ', msg));         
      })         
      .catch(err => console.error('Could not subscribe', err));     
    }   
  }
}
