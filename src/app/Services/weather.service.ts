import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { LocationDetails } from '../Models/LocationDetails';
import { WeatherDetails } from '../Models/WeatherDetails';
import { TemperatureData } from '../Models/TemperatureData';
import { TodayData } from '../Models/TodayData';
import { WeekData } from '../Models/WeekData';
import { TodaysHighlight } from '../Models/TodaysHighlight';
import { Observable } from 'rxjs';
import { EnvironmentalVariables } from '../Environment/EnvironmentVariables';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  //Variables which will be filled by API Endpoints
  locationDetails?: LocationDetails;
  weatherDetails?: WeatherDetails;

  //Variables that have the extracted data from the API Endpoint Variables
  temperatureData: TemperatureData = new TemperatureData();
  todayData?: TodayData[] = []; 
  weekData?: WeekData[] = [];
  todaysHighlight?: TodaysHighlight = new TodaysHighlight();

  //variables to be used as a default for API calls 
  cityName: string ='Guwahati';
  date: string = '20240101';

  //Variable holding current time
  currentTime: Date;

  //variables to control tabs 
  today:boolean = false;
  week:boolean = true;

  //variables to control metric values
  celsius:boolean = true;
  fahrenheit:boolean = false;

  constructor(private httpClient: HttpClient) {
    
  }

  //Images method
  getSummaryImage(summary:string):string{
    var baseAddress = 'assets/';
    var cloudSunny = 'cloud (1).png';
    var rainSunny = 'rain.png';
    var cloudy = 'cloud (2).png';
    var sunny = 'sky.png';
    var storm = 'storm.png';
    var snow = 'snowflake (1).png';

  if(String(summary).includes("Partly Cloudy") || String(summary).includes("Partly cloudy") || String(summary).includes("Mist") || String(summary).includes("Overcast")) return baseAddress+cloudy;
  else if(String(summary).includes("rain") || String(summary).includes("Light rain") || String(summary).includes("Light drizzle") || String(summary).includes("Moderate or heavy rain")) return baseAddress+rainSunny;
  else if(String(summary).includes("Sunny")) return baseAddress+sunny;
  else if(String(summary).includes("with thunder")) return baseAddress+storm;
  else if(String(summary).includes("Light sleet") || String(summary).includes("Moderate or heavy snow in area with thunder")) return baseAddress+snow;
  
    return baseAddress+cloudSunny;
  }

// Setting left-container data model properties for temperature
fillTemperatureDataModel(){
  this.currentTime = new Date();
  if (this.weatherDetails && this.weatherDetails.location) {
      this.temperatureData.day = this.weatherDetails.location.name;
      this.temperatureData.time = this.weatherDetails.location.localtime;
      this.temperatureData.temperature = this.weatherDetails.current.temp_c;
      this.temperatureData.location = this.weatherDetails.location.name;
      this.temperatureData.rainPercent = this.weatherDetails.current.precip_mm;
      this.temperatureData.summaryPhrase = this.weatherDetails.current.condition.text;
      this.temperatureData.summaryImage = this.getSummaryImage(this.temperatureData.summaryPhrase);
  }
}


  // Setting right-container data model properties for week data
  fillWeekData(){
    this.weekData = [];
    if(this.weatherDetails && this.weatherDetails.forecast && this.weatherDetails.forecast.forecastday){
      for (let weekCount = 0; weekCount < this.weatherDetails.forecast.forecastday.length && weekCount < 7; weekCount++) {
        if (this.weatherDetails.forecast.forecastday[weekCount]) {
          this.weekData.push(new WeekData());
          this.weekData[weekCount].day = this.weatherDetails.forecast.forecastday[weekCount].date.slice(5,10);
          this.weekData[weekCount].tempMax = this.weatherDetails.forecast.forecastday[weekCount].day.maxtemp_c;
          this.weekData[weekCount].tempMin = this.weatherDetails.forecast.forecastday[weekCount].day.mintemp_c;
          this.weekData[weekCount].summaryImage = this.getSummaryImage(this.weatherDetails.forecast.forecastday[weekCount].day.condition.text);
        } else {
          console.error(`Data for day ${weekCount + 1} is undefined`);
        }
      }
    } else {
      console.error('Weather details or forecast data is undefined/null');
    }
  }
  
  

  fillTodayData() {

    this.todayData = [];
    if (this.weatherDetails && this.weatherDetails.forecast && this.weatherDetails.forecast.forecastday) {
      // Take only the first forecast day
      const firstForecastDay = this.weatherDetails.forecast.forecastday[0];
      if (firstForecastDay && firstForecastDay['hour'] && firstForecastDay['hour'].length > 0) {
        // Iterate over up to 6 hours within the first forecast day
        for (let hourIndex = 0; hourIndex < Math.min(6, firstForecastDay['hour'].length); hourIndex++) {
          const hourData = firstForecastDay['hour'][hourIndex];
          // Create a new TodayData object for each hour
          const todayDataItem = new TodayData();
          // Set the time, temperature, and summaryImage for each hour
          todayDataItem.time = hourData.time.slice(11, 16);
          todayDataItem.temperature = hourData.temp_c;
          if (firstForecastDay['day'] && firstForecastDay['day'].condition) {
            todayDataItem.summaryImage = this.getSummaryImage(firstForecastDay['day'].condition.text);
          }
          // Push the TodayData object to the todayData array
          this.todayData.push(todayDataItem);
        }
      } else {
        console.error('Hourly forecast data is undefined for the first forecast day');
      }
    } else {
      console.error('Weather details or forecast data is undefined/null');
    }
  }
  
  

  
  
  
  //Method to get today's highlight data from base variables
  fillTodaysHighlight(){
    if (this.weatherDetails && this.weatherDetails.location) {
       this.todaysHighlight.airQuality = this.weatherDetails.current.air_quality['us-epa-index'];
       this.todaysHighlight.humidity = this.weatherDetails.current.humidity;
       this.todaysHighlight.sunrise = this.weatherDetails.forecast.forecastday[0].astro.sunrise;
       this.todaysHighlight.sunset = this.weatherDetails.forecast.forecastday[0].astro.sunset;
       this.todaysHighlight.uvIndex = this.weatherDetails.current.uv;
       this.todaysHighlight.visibility = this.weatherDetails.current.vis_km;
       this.todaysHighlight.windStatus = this.weatherDetails.current.wind_kph;
    }
  }
  
  //Method to create useful data chunks for UI using the data received from the API
  prepareData(): void {
    // Setting left-container data model properties
    this.fillTemperatureDataModel();
    this.fillWeekData();
    this.fillTodayData();
    this.fillTodaysHighlight();

    console.log(this.temperatureData);
    console.log(this.weekData);
    console.log(this.todayData);
    console.log(this.todaysHighlight);
  }
  
  celsiusToFahrenheit(celsius:number):number{
     return +((celsius * 1.8) + 32).toFixed(1) ; 
  }

  fahrenheitToCelsius(fahrenheit:number):number{
     return +((fahrenheit - 32) * 0.55).toFixed(1);
  }

  //Method to get locationdetails from the WeatherAPI 
  getLocationDetails(cityName: string): Observable<LocationDetails> {
    return this.httpClient.get<LocationDetails>(EnvironmentalVariables.weatherApiLocationBaseURL, {
      params: new HttpParams()
        .set('key', EnvironmentalVariables.weatherApiKeyValue)
        .set('q', cityName)
    });
  }

  //Method to get forecastdetails from the WeatherAPI
  getWeatherReport(cityName: string, days: number): Observable<WeatherDetails> {
    return this.httpClient.get<WeatherDetails>('http://api.weatherapi.com/v1/forecast.json', {
      params: new HttpParams()
        .set('key', EnvironmentalVariables.weatherApiKeyValue) //taking the APIkeyValue from EnvironmentVariables.ts file
        .set('q', cityName)
        .set('days', days)
        .set('aqi', 'yes')
    });
}

  getData(){
    
    var cityName: string;
    var days = 7;
  
    this.getLocationDetails(this.cityName).subscribe({
      next:(response)=>{
        this.locationDetails = response;
        
        // Call getWeatherReport inside the subscribe block
        this.getWeatherReport(this.cityName,days).subscribe({
          next: (response) => {
            this.weatherDetails = response;
            this.prepareData();
          }
          
        });
      }
    });
    
  }
}
