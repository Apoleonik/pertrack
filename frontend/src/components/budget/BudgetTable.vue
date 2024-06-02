<script setup>
import { formatCurrencyToRUB } from '@/helpers';

defineProps({
  data: { type: Array, required: true }
});

const amountFormatter = (row, cellValue) => formatCurrencyToRUB(row[cellValue.property]);
</script>

<template>
  <el-table :data="data">
    <el-table-column prop="icon" label="Icon" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount" label="Amount" :formatter="amountFormatter" />
    <el-table-column prop="category" label="Category" />
  </el-table>
</template>
