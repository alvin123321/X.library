import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  loader = 'donut';

  constructor() {}

  ngOnInit(): void {}

  switchLoader(loaderName: string) {
    this.loader = loaderName;
  }
}
