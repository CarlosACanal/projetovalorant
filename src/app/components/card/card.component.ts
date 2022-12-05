import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  agents!: any[];
  @Input() name?: string;
  @Input() description?: string;
  @Input() cardImage?: string;
  @Input() backgroundColorCard?: string;
  @Input() backgroundImageCard?: string;

  constructor() { }

  ngOnInit(): void {
  }


}
