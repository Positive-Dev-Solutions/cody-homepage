import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  isDisableTestOn = true;
  isDuplicateClicked = false;
  someText = "This is a test of some text";
  loveIt = "Love it &hearts;";

  constructor() {
    setTimeout(() => {
      this.isDisableTestOn = false;
    }, 5000)
  }

  ngOnInit(): void {
  }

  onDuplicateComponent() {
    this.isDuplicateClicked = true;
  }

  onTypingStuff(event: Event) {
    this.someText = (<HTMLInputElement>event.target).value;
  }

  onStuff(s: string) {
    this.someText = "Clicking Stuff resets... ya know... " + s;
  }

  onLoveIt() {
    this.loveIt = "&#128150;";
  }

}
