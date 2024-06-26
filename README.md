# Weather-Dashboard Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.



A powerful responsive weather dashboard is being designed and developed using Angular JAVA(Version : 17.3.7), HTML, CSS , bootstrap and WeatherAPIs to call the weather calls in the UI

The dashboard enables the user to locate any location's weather in the search placeholder. The dashboard shows the current weather for the searched location, including current temperature, hourly temperature for the current day and also weekly forecast for upcoming days' weather. It gives a detailed information on UV index, Wind Status, Sunrise, Sunset, Humidity, Visibility and Air Quality. The dashboard has a special functionality of seeing the weather temperature in both Celsius and Fahrenheit degree. The dashboard has used WeatherAPIs (https://www.weatherapi.com/) to call the weather calls to the UI. The dashboard is completely owned by me. The APIs used in this project are: 1.http://api.weatherapi.com/v1/search.json 
2.http://api.weatherapi.com/v1/forecast.json

## Architecture and the angular materials used in this dashboard  
The dashboard has the following components

1.The left-container component consists of all the HTML codes and the typescript logic for the left-side of the dashboard
2.The right-container component consists of all the HTML codes and the typescript logic for the right-hand side (background color light yellow) of the dashboard.
3.Models component consists of all the data models and their types to extract those data from the weather API JSON payload.
4.Services component consists of the weather.service.ts file which consists of all the business logics to transfer the data from Client API to Dashboard UI
5.Environment Variables consists of the API key name and the API key value which needs to be taken from the weatherAPI.com and pasted there. 
6.Flaticons for icons , CSS , images are used in the dashboard.
7.HttpClientModule is imported and used for calling APIs from WeatherAPI.com
8.Fonts are used from FontAwesome and google font as well.


<img width="245" alt="Components" src="https://github.com/Ankita8876/Weather-Dashboard-weatherapp/assets/40633906/faa4051e-d7b5-4f1e-9707-4cf086614c3f">


## ***The API Key value is present inside the EnvironmentVariables.ts file inside Environment folder where you need to generate your API key from WeatherAPI.com and use that key value inside that file and run the project.

<img width="958" alt="EnvironmentVariables" src="https://github.com/Ankita8876/Weather-Dashboard-weatherapp/assets/40633906/8f7b485d-77a4-4b2d-970e-6597361177bb">

    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## **node_modules folder might not be added in the github as it is a large folder. Please add it manually in the project(if in case its not present).
To create a node_modules folder, you will need to have Node.js and npm (Node package manager) installed on your system. Here are the steps to create a node_modules folder:

Open your command line interface (CLI) such as Command Prompt or Terminal.

Navigate to the directory where you want to create the node_modules folder using the cd command. For example, if you want to create the folder in your project directory, you can use the following command:

cd path/to/your/project/directory

Once you are in the desired directory, you can create the node_modules folder by running the following command:

mkdir node_modules

## Use ng serve --open to execute the project.

## The Weather Dashboard :
<img width="959" alt="DashboardUI" src="https://github.com/Ankita8876/Weather-Dashboard-weatherapp/assets/40633906/ba7a8722-86f3-4056-bbcc-8dabff06178a">


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
