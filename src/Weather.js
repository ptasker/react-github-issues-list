import React, { Component } from 'react';

class Weather extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="Weather">

        <button onClick={() => this.props.loadWeather()}>Load my Weather</button>
      </div>
    );
  }
}

export default Weather;