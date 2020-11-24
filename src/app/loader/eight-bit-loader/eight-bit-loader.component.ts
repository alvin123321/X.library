import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-eight-bit-loader',
  templateUrl: './eight-bit-loader.component.html',
  styleUrls: ['./eight-bit-loader.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EightBitLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  colorSwitch(colorCode: string) {
    document.documentElement.style.setProperty('--main-color', colorCode);
  }
}
