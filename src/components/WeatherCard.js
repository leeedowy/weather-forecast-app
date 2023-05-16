import React from 'react';
import WeatherDetails from './WeatherDetails';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ weatherData }) => {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{weatherData.city} right now</Card.Title>
        <Card.Text>
          Temperature: {weatherData.temperature} °C
        </Card.Text>
        <Card.Text>
          Weather: {weatherData.weather}
        </Card.Text>
        <WeatherDetails weatherData={weatherData} />
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
