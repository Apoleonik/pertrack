<script setup>
import { Chart, registerables } from 'chart.js';
import { computed } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

Chart.register(...registerables);

const props = defineProps({
  data: { type: Map, required: true }
});

const chartData = computed(() => ({
  labels: Array.from(props.data.keys()),
  datasets: [{ data: Array.from(props.data.values()) }]
}));
</script>

<template>
  <DoughnutChart :chartData="chartData" />
</template>
