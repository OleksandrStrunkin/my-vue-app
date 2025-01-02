import axios from "axios";

const apiKey = "42e427f55f8f89516d845dd76e3ce052";

export async function getWeather(city) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  console.log(res.data)
    return res.data;
}


export default getWeather;

// export const getWeather = async (city) => {
//   try {
//     const res = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     );
//     if (res.data.cod === 200) {
//       return res.data;
//     } else {
//       console.error(res.data.cod);
//       throw new Error(res.data.message);
//     }
//   } catch (error) {
//     throw error;
//   }
// };
