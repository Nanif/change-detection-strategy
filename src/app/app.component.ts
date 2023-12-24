import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app-container">
    	<button (click)="clickMe()">click me!</button>
      <app-child-component></app-child-component>
    </div>`
})
export class AppComponent {
  title = 'advanced-angular-change-detection';
  clickMe() { }
}
