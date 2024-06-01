<script setup>
import { Chart, registerables } from 'chart.js';
import { DoughnutChart } from 'vue-chart-3';

Chart.register(...registerables);

const testData = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5]
      // backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED']
    }
  ]
};
</script>
<template>
  <DoughnutChart :chartData="testData" />
</template>
