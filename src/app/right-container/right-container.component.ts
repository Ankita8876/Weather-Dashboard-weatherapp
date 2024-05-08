import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {

constructor(public weatherService:WeatherService){

}

  //function to control tab values and tab states
  onTodayClick(){
    this.weatherService.week = false;
    this.weatherService.today = true;
  }

  onWeekClick(){
  this.weatherService.week = true;
  this.weatherService.today = false;
  }

  //function to control metric values
  onCelsiusClick(){
  this.weatherService.celsius = true;
  this.weatherService.fahrenheit = false;
  }
  onFahrenheitClick(){
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }

  faCloud:any = faCloud;
}
