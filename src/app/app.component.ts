import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'x-library';
  loader = 'donut';

  switchLoader(loaderName: string) {
    this.loader = loaderName;
  }
}
