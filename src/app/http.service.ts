import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      'http://api.weatherapi.com/v1/forecast.json?key=cda6620cf29c4886b47172050202809&q=Vienna&days=10&fbclid=IwAR3zNuI9rn0ebpFbCv0FE5R_3b0BgDnv6iN240w-0chZBlcuUP8mDBcKcwI'
    );
  }
}
