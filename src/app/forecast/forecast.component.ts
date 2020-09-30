import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  forecasts: Object;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getWeather().subscribe((data) => {
      this.forecasts = data;
      console.log(this.forecasts);
    });
  }
}
