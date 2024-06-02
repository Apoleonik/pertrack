import budgetService from '@/services/budget';
import { defineStore } from 'pinia';

const useBudgetStore = defineStore('budget', {
  state: () => ({
    expenses: [],
    salary: []
  }),
  actions: {
    async loadExpenses(dates) {
      return await budgetService.fetchExpenses(dates).then(({ data }) => (this.expenses = data));
    },
    async loadSalary(dates) {
      return await budgetService.fetchSalary(dates).then(({ data }) => (this.salary = data));
    }
  }
});

export default useBudgetStore;
