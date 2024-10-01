import axios from 'axios';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = 'df2a6c86db12206a36e794212f659566'; // Вставьте ваш ключ API здесь

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
    return response.data;
  } catch {
    console.error('fetch error');
  }
};
