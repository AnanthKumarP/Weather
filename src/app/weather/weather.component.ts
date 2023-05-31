import { Component, OnInit } from "@angular/core";
import { WeatherApiService } from "../weather-api.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  panelList = [
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
    { wind: "", temperature: "", description: "", city: "" },
  ];
  dialog = false;
  index = 0;

  constructor(private weatherService: WeatherApiService) {}

  ngOnInit(): void {
    // this.weatherService.getWeatherInfo("Bangalore").subscribe((res) => {
    //   console.log(res);
    // });
  }
  addCity(index) {
    this.index = index;
  }
  updateCity(cty) {
    console.log(cty.value);
    this.weatherService.getWeatherInfo(cty.value).subscribe((res) => {
      this.panelList[this.index - 1].wind = res.wind;
      this.panelList[this.index - 1].temperature = res.temperature;
      this.panelList[this.index - 1].description = res.description;
      this.panelList[this.index - 1].city = res.city;
      console.log(this.panelList);
      this.index = 0;
    });
  }
}
