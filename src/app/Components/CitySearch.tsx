'use client';

import React, { useState, ChangeEvent } from 'react';

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Moscow',
];

interface SearchProps{
  selectedCity: string,
  setCity: Function
}

export function CitySearch({ selectedCity, setCity }: SearchProps) {
  const [query, setQuery] = useState<string>('');
  const [filteredCities, setFilteredCities] = useState<string[]>(cities);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setQuery(input);
    const filtered = cities.filter((city) => city.toLowerCase().includes(input.toLowerCase()));
    setFilteredCities(filtered);
  };

  const handleCityClick = (city: string) => {
    setQuery(city);
    setFilteredCities([]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search city"
        />
        <button onClick={() => { setCity(query); }}>OK</button>
      </div>
      {query && filteredCities.length > 0 && (
        <ul>
          {filteredCities.map((city) => (
            <li className="selected__city" key={city} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySearch;
