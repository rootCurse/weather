'use client';

import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../Services/axios';
import Loader from '../Components/Loader/Loader';

export function City() {
  const [weather, setWeather] = useState<any>();
  const [loading, setLoading] = useState<any>();
  useEffect(() => {
    setLoading(true);
    getCurrentWeather('Moscow')
      .then((result) => { setWeather(result); console.log(result); })
      .catch((error) => console.error(error)).finally(() => { setLoading(false); });
  }, []);

  const getWindDirection = (degrees: number) => {
    const directions = [
      'север',
      'северо-восток',
      'восток',
      'юго-восток',
      'юг',
      'юго-запад',
      'запад',
      'северо-запад',
    ];

    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {weather ? (
        <div className="container">
          <div className="image_with_info">
            <h3>{weather?.city.name}</h3>
            <p>{`${Math.round(weather?.list[0].main.temp - 273)}C`}</p>
          </div>
          <div className="main__info">
            <section>
              <ol className="list_of_temparature" />
              <div className="secondary__info">
                <ul className="">
                  {weather?.list.slice(0, 7).map((day: any, index: number) => (<li>{Math.round(day.main.temp - 273)}</li>))}
                </ul>
                <div />
              </div>
              <div className="additional__info">
                <p>{Math.round(weather?.list[0].main.feels_like - 273)}</p>
                <p>{Math.round(weather?.list[0].main.temp_min - 273)}</p>
                <p>{Math.round(weather?.list[0].main.temp_max - 273)}</p>
                <p>{weather?.list[0].main.humidity}</p>
                <p>{`${weather?.list[0].wind.speed}м/c`}</p>
                <p>{getWindDirection(weather?.list[0].wind.deg)}</p>
                <p>{weather?.list[0].weather[0].main}</p>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>
          <p>Data not found</p>
        </div>
      )}
    </>
  );
}

export default City;
