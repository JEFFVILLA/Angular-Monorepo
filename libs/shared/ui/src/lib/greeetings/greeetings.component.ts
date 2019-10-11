import { Component, OnInit } from '@angular/core';
import { Grettings } from '@angular-workspace/shared/domain';

@Component({
  selector: 'ab-ui-greeetings',
  template: `
    <h1>
      {{theGreeting.message}}
    </h1>
  `,
  styles: []
})
export class GreeetingsComponent implements OnInit {
  public theGreeting: Grettings = {message: 'Hello World'};
  constructor() { }

  ngOnInit() {
  }

}
