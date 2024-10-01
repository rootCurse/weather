'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCurrentWeather } from '../../Services/axios';
import { useCityStore } from '../../Services/store';
import Loader from '../Loader/Loader';
import styles from './weathercard.module.scss';

interface WeatherCardProps{
    city: string
}

export function WeatherCard({ city }: WeatherCardProps) {
  const { favoriteCities, addCity } = useCityStore();
  const [weather, setWeather] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    getCurrentWeather(city)
      .then((result) => { setWeather(result); console.log(result); })
      .catch((error) => console.error(error)).finally(() => { setLoading(false); });
  }, []);

  const handleAddFavorite = (name: string) => {
    if (favoriteCities.indexOf(name) < 0) { addCity(name); }
    console.log(favoriteCities.indexOf(name));
  };

  if (loading) {
    return (<Loader />);
  }

  return (
    <>
      {weather ? (
        <div className={styles.info__container}>
          <div className={styles.info__subcontainer}>
            <h3>{weather?.city.name}</h3>
            <p>{`${Math.round(weather?.list[0].main.temp - 273)}C`}</p>
            <p>{weather?.list[0].weather[0].main}</p>
          </div>
          <div className={styles.info__subcontainer}>
            <Link href={{ pathname: '/city', query: { city } }}>More info</Link>
            <button onClick={(event) => { handleAddFavorite(city); }}>Add to favorite</button>
          </div>
        </div>
      )
        : (
          <div>
            <p>Data not found</p>
          </div>
        )}
    </>
  );
}
