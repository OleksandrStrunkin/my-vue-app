<template>
    <div v-if="info && info.cityName" class="discBox">
      <h2>{{ info.cityName }}, {{ info.country }}</h2>
      <div class="box">
        <p>Температура: {{ info.temperature }}°C</p>
        <p>Швидкість вітру: {{ info.windSpeed }} м/с</p>
        <p>Хмарність: {{ info.cloudiness }}%</p>
        <p>Схід сонця: {{ info.sunrise }}</p>
        <p>Захід сонця: {{ info.sunset }}</p>
        <p>Опис: {{ info.description }}</p>
        <img :src="info.icon" alt="Weather icon" />
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
      grid-column-gap: 5px;
      grid-row-gap: 6px;
  }
</style>