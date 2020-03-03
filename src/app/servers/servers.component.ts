import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  isDisableTestOn = true;

  constructor() {
    setTimeout(() => {
      this.isDisableTestOn = false;
    }, 5000)
  }

  ngOnInit(): void {
  }

}
