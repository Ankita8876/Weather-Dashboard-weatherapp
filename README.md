# Weather-Dashboard Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.



A powerful responsive weather dashboard is being designed and developed using Angular JAVA(Version : 17.3.7), HTML, CSS , bootstrap and WeatherAPIs to call the weather calls in the UI

The dashboard enables the user to locate any location's weather in the search placeholder. The dashboard shows the current weather for the searched location, including current temperature, hourly temperature for the current day and also weekly forecast for upcoming days' weather. It gives a detailed information on UV index, Wind Status, Sunrise, Sunset, Humidity, Visibility and Air Quality. The dashboard has a special functionality of seeing the weather temperature in both Celsius and Fahrenheit degree. The dashboard has used WeatherAPIs (https://www.weatherapi.com/) to call the weather calls to the UI. The dashboard is completely owned by me. The APIs used in this project are: 1.http://api.weatherapi.com/v1/search.json 2.http://api.weatherapi.com/v1/forecast.json

## Architecture and the angular materials used in this dashboard  
The dashboard has the following components

1.The left-container component consists of all the HTML codes and the typescript logic for the left-side of the dashboard
2.The right-container component consists of all the HTML codes and the typescript logic for the right-hand side (background color light yellow) of the dashboard.
3.Models component consists of all the data models and their types to extract those data from the weather API JSON payload.
4.Services component consists of the weather.service.ts file which consists of all the business logics to transfer the data from Client API to Dashboard UI
5.Environment Variables consists of the API key name and the API key value which needs to be taken from the weatherAPI.com and pasted there. 
## ***The API Key value is present inside the EnvironmentVariables.ts file inside Environment folder where you need to generate your API key from WeatherAPI.com and use that key value inside that file and run the project.
7.Flaticons for icons , CSS , images are used in the dashboard.
8.HttpClientModule is imported and used for calling APIs from WeatherAPI.com
9.Fonts are used from FontAwesome and google font as well.
    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## **node_modules folder might not be added in the github. Please add it manually in the project.
## Use ng serve --open to execute the project.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
