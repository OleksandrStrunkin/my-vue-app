import axios from "axios";

const apiKey = process.env.VUE_APP_API_KEY;

export async function getWeather(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  return res.data;
}

export default getWeather;
