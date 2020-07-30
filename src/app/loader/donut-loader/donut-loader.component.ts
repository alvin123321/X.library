import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-donut-loader',
  templateUrl: './donut-loader.component.html',
  styleUrls: ['./donut-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DonutLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
