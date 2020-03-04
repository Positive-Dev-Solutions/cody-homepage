import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .yesWay {
      color: white;
    }
  `]
})
export class ServerComponent {
  thingy = "wow";
  numberThingy = 123;

  constructor() {
    this.thingy = Math.random() > 0.5 ? "No way" : "Yes way";
  }

  getColor() {
    return this.thingy === "Yes way" ? 'green' : 'red';
  }
}
