import React from 'react';
import Card from 'react-bootstrap/Card';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>Additional Information</Card.Title>
        <Card.Text>
          <strong>Humidity:</strong> {weatherData.humidity}% <br />
          <strong>Wind Speed:</strong> {weatherData.wind_speed} m/s <br />
          <strong>UV Index:</strong> {weatherData.uvi}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherDetails;
