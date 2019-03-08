import { Component, OnInit } from '@angular/core';

import { Weather } from '../../shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  query = '';
  errorMessage: any = {};

  constructor(private weatherService: WeatherService,
              private weatherDataService: WeatherDataService) { }

  ngOnInit() {
  }

  set weather(data: Weather) {
    this.weatherDataService.weather = data;
  }

  search(query1) {
    query1 = this.query;
    this.weatherService
        .searchWeatherData(query1)
        .subscribe(
          weather => this.weather = weather,
          error => this.errorMessage = <any>error,
          () => query1 = ''
        );
  }

}
