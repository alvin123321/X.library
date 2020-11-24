import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bar-loader',
  templateUrl: './bar-loader.component.html',
  styleUrls: ['./bar-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class BarLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
