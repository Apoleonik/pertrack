<script setup>
import BudgetCard from '@/components/budget/BudgetCard.vue';
import useBudgetStore from '@/stores/budget';

const budget = useBudgetStore();
</script>

<template>
  <BudgetCard header="Expenses" :load-method="budget.loadExpenses" :loaded-data="budget.expenses" />
  <BudgetCard header="Salary" :load-method="budget.loadSalary" :loaded-data="budget.salary" />
</template>
