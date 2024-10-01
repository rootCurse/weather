'use client';

import { useState } from 'react';
import { useCityStore } from '../Services/store';
import { WeatherCard } from '../Components/WeatherCard/WeatherCard';

export function Favorite() {
  const { favoriteCities, addCity } = useCityStore();
  return (
    <>
      {favoriteCities.map((city) => <WeatherCard city ={city}/>)}
      <button onClick={() => { addCity('test'); }}>Click</button>
    </>
  );
}

export default Favorite;
