import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Weather from './Weather';
import WeatherInfo from './WeatherInfo';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    };

    this.loadWeather = this.loadWeather.bind(this);
  };

  loadWeather() {
    return fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22ottawa%2C%20on%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
      .then((response) => response.json())
      .then((responseJson) => {
        // let json = responseJson.results.forecast;
        let json = responseJson.query.results.channel.item.forecast;
        this.setState({ data: json });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Header title="What's up y'all?" />
        <p className="App-intro">

        </p>
        <div className="weather-box">
          {
            Object.keys( this.state.data ).map( key =>
								<WeatherInfo key={key} index={key} details={this.state.data[ key ]} /> )
          }
        </div>
        <Weather loadWeather={this.loadWeather} state={this.state} />
      </div>
    );
  }
}

export default App;
