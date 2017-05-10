import React, { Component } from 'react';

class WeatherInfo extends Component {
  render() {
    const details = this.props.details;

    return (
        <div className="weather-info">
            <h3>{details.day} - {details.date}</h3>
            <caption>
                {details.text}
            </caption>
        </div>
    );
  }
}

export default WeatherInfo;