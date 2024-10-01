'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import CitySearch from './Components/CitySearch';
import { WeatherCard } from './Components/WeatherCard/WeatherCard';

export default function Home() {
  const [city, setCity] = useState<string>('');
  return (
    <div className="main__container">
      <CitySearch selectedCity={city} setCity={setCity} />
      {city && (<WeatherCard city={city} />)}
    </div>
  );
}
