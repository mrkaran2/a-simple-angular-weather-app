import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @Output() cityName: string;
  @Output() temp: number;
  @Output() description: string;
  currentCity: string;
  show = false;
  @ViewChild('apiKey') myAPI: ElementRef;
  constructor(private httpService: HttpService) {}
  title = 'Weather App';
  ngOnInit() {}
  OnSubmit() {
    if (this.cityName === '' || this.cityName === undefined) {
      this.show = false;
      alert('Invalid  city name or API key!!');
      this.cityName = '';
      return;
    }
    this.httpService.sendRequest(this.cityName, this.myAPI.nativeElement.value)
    .subscribe( (response) => {
      if (response === null) {
        this.show = false;
        alert('Invalid  city name or API key!!');
        this.cityName = '';
      } else {
      this.show = true;
      this.currentCity = response.data[0].city_name;
      this.temp = +response.data[0].temp;
      this.description = response.data[0].weather.description;
      }
    }, (error) => {
      alert('Invalid  city name or API key!!');
      this.cityName = '';
    });
  }
}
