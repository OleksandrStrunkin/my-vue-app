<template>
  <div class="wrapper">
    <h1>Прогноз погоди</h1>
    <p>Прогноз погоди у {{ city === "" ? "вашому місті" : cityName }}</p>
    <input v-model="city" class="input_cl" type="text" placeholder="Місто">
    <button @click="fetchWeather()" v-if="city !== ''" type="button">Отримати погоду</button>
    <button v-else disabled type="button">Введіть назву міста</button>
    <p v-if="error !== ''">{{ error }}</p>
    <p v-if="info !== null">{{ info.name }}</p>
  </div>
</template>

<script>
import getWeather from './WeatherApi';

export default {
  data() {
    return {
      city: "",
      error: "",
      info: null,
    }
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
        this.info = weatherData;
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
    height: 500px;
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
    background: #e3bc4d;
    color: #fff;
    border-radius: 10px;
    border: 2px solid #b99935;
    padding: 10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 500ms ease;
  }

  .wrapper button:hover {
    transform: scale(1.1);
  }
  .wrapper button:disabled {
    background-color: #8d783c;
    transform: scale(1);
  }
</style>
