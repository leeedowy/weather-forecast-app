import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ForecastItem = ({ forecastData }) => {
  return (
    <ListGroup.Item>
      <strong>{forecastData.day}</strong>: {forecastData.weather}, {forecastData.temperature} °C
    </ListGroup.Item>
  );
}

export default ForecastItem;
