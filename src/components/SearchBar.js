import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(city);
  }

  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <Form className="search-bar" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="label-city">City</Form.Label>
        <Form.Control type="text" value={city} onChange={handleChange} placeholder="Enter city" />
      </Form.Group>
      <Button className="search-button" variant="primary" type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;
