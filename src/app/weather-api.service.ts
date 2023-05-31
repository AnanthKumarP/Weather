import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getWeatherInfo(cityName): Observable<any> {
    const city = cityName;
    return this.http.get(`https://goweather.herokuapp.com/weather/${city}`);
  }
}
