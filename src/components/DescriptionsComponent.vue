<template>
    <div v-if="info && info.cityName" class="discBox">
      <h2>{{ info.cityName }}, {{ info.country }}</h2>
      <div class="box">
        <p>Температура: {{ info.temperature }}°C</p>
        <p>Швидкість вітру: {{ info.windSpeed }} м/с</p>
        <p>Хмарність: {{ info.cloudiness }}%</p>
        <p>Схід сонця: {{ info.sunrise }}</p>
        <p>Захід сонця: {{ info.sunset }}</p>
        <p>Хмарність: {{ info.description }}</p>
        <!-- <img :src="info.icon" alt="Weather icon" /> -->
      </div>
    </div>
</template>

<script>

export default {
  props: {
    info: {
      type: Object,
      require: true,
    }
  }
}

</script>

<style scoped>
  .discBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .box{
    display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 10px;
      grid-column-gap: 200px;
  }
  .box p {
    width: 100%;
    border: 2px solid #6d2d7d;
    background-color: rgba(255, 0, 0, 0.089);
    border-radius: 5px;
    padding: 15px 15px;
    flex-grow: 1;
    font-size: large;
  }
</style>