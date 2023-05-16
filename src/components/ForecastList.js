import React from 'react';
import ForecastItem from './ForecastItem';
import { ListGroup } from 'react-bootstrap';

const ForecastList = ({ forecastData }) => {
  return (
    <ListGroup>
      {forecastData.map((data, index) => <ForecastItem key={index} forecastData={data} />)}
    </ListGroup>
  );
}

export default ForecastList;
