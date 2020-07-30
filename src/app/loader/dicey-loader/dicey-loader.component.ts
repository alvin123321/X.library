import { Component, OnInit } from '@angular/core';
import { style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dicey-loader',
  templateUrl: './dicey-loader.component.html',
  styleUrls: ['./dicey-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DiceyLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
