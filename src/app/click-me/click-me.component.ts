import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  template: `
    {{clickMessage}}
    <br/>
    <button (click)="onClickMe()">Click me!</button>
    `
})
export class ClickMeComponent {
  clickMessage = 'initialValue';

  onClickMe() {
    this.clickMessage = 'You are the best!';
  }
}