import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <p>the child is: {{getRunDetected}}</p>`
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get getRunDetected() {
    console.log('run detected');
    return 'component!'

  }
}
