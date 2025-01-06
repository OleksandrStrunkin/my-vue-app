<template>
  <div class="wrapper">
    <h1>Прогноз погоди</h1>
    <p>Прогноз погоди у {{ city === "" ? "вашому місті" : cityName }}</p>
    <input v-model="city" class="input_cl" type="text" placeholder="Місто">
    <button @click="fetchWeather()" v-if="city !== ''" type="button">Отримати погоду</button>
    <button v-else disabled type="button">Введіть назву міста</button>
    <p v-if="error !== ''">{{ error }}</p>
    <DescriptionsComponent :info="info"/>
  </div>
</template>

<script>
import getWeather from './WeatherApi';
import DescriptionsComponent from './components/DescriptionsComponent.vue';

export default {
  components: {
    DescriptionsComponent,
  },
  data() {
    return {
      city: "",
      error: "",
      info: {
        cityName: null,
        country: null,
        temperature: null,
        windSpeed: null,
        cloudiness: null,
        sunrise: null,
        sunset: null,
        icon: null,
        description: null,
      }
    };
  },
  computed: {
    cityName() {
      return this.city
    }
  },
  methods: {
    async fetchWeather() {
      if (this.city.trim().length < 2) {
        this.error = "Некоректна назва міста";
        return;
      }

      this.info = null;
      this.error = "";
      try {
        const weatherData = await getWeather(this.city);

        this.info = {
          cityName: weatherData.name,
          country: weatherData.sys.country,
          temperature: (weatherData.main.temp - 273.15).toFixed(1), // Перетворення з Кельвінів у Цельсії
          windSpeed: weatherData.wind.speed,
          cloudiness: weatherData.clouds.all, // % хмарності
          sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(), // Формат часу
          sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
          icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`, // Іконка
          description: weatherData.weather[0].description
        };
      } catch (error) {
        this.error = "Не вдалося отримати дані про погоду. Перевірте назву міста.";
      }
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 900px;
    min-height: 500px;
    border-radius: 25px;
    padding: 10px;
    background: black;
    color: white;
    text-align: center;
  }

  .wrapper h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .wrapper p {
    margin-bottom: 30px;
  }

  .input_cl {
    margin-bottom: 30px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #110813;
    color: #fcfcfc;
    font-size: 14px;
    padding: 5px 8px;
    outline: none;
  }
  .input_cl:focus {
    border-bottom-color: #6d2d7d;
  }

  .wrapper button {
    background: #6d2d7d61;
    color: #fff;
    border-radius: 10px;
    border: 2px solid #6d2d7d;
    padding: 10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: background 500ms ease;
  }

  .wrapper button:hover {
    background:#6d2d7d;
  }
  .wrapper button:disabled {
    background-color: #6d2d7d27;
    color: #ffffff6a;
  }
</style>
