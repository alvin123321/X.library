import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bouncing-loader',
  templateUrl: './bouncing-loader.component.html',
  styleUrls: ['./bouncing-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BouncingLoaderComponent implements OnInit {
  bouncingIcon = '↓';
  constructor() {}

  ngOnInit(): void {}

  switchIcon(icon: any) {
    this.bouncingIcon = icon;
  }
}
