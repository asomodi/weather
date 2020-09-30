import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  forecasts: Object;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getWeather().subscribe((data) => {
      this.forecasts = data;
      console.log(this.forecasts);
    });
  }
}
