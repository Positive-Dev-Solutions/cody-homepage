import { Component, OnInit } from '@angular/core';
import { MediumCard } from './medium-card.model';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.scss']
})
export class MediumCardComponent implements OnInit {
  mediumCardData: MediumCard;

  constructor() { }

  ngOnInit(): void {
  }

}
