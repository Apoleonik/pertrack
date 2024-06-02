<script setup>
import BudgetChart from '@/components/budget/BudgetChart.vue';
import BudgetTable from '@/components/budget/BudgetTable.vue';
import { formatCurrencyToRUB } from '@/helpers';
import { computed, onBeforeMount, ref, watch } from 'vue';

const props = defineProps({
  header: { type: String, required: true },
  loadMethod: { type: Function, required: true },
  loadedData: { type: Array, required: true }
});

const isLoading = ref(true);

const filterDates = ref([new Date().toISOString(), new Date().toISOString()]);
watch(filterDates, () => {
  isLoading.value = true;
  props.loadMethod(filterDates.value).finally(() => (isLoading.value = false));
});

onBeforeMount(() => props.loadMethod(filterDates.value).finally(() => (isLoading.value = false)));

const filterCategories = ref([]);
const filteredBudgetByCategories = computed(() =>
  filterCategories.value.length > 0
    ? props.loadedData.filter((e) => filterCategories.value.includes(e.category))
    : props.loadedData
);

const budgetCategories = computed(() => {
  const categories = new Map();
  props.loadedData.forEach((e) => {
    if (filterCategories.value.length > 0 && !filterCategories.value.includes(e.category)) return;

    const previous_value = categories.get(e.category) || 0;
    categories.set(e.category, previous_value + e.amount);
  });
  return categories;
});

const categories = computed(() => new Set(props.loadedData.map((e) => e.category)));
</script>

<template>
  <el-card :header="header" class="budget-card" v-loading="isLoading">
    <el-row>
      <el-col :span="17">
        <el-row class="budget-card__controls">
          <div style="max-width: 350px">
            <el-date-picker v-model="filterDates" type="daterange" :clearable="false" format="DD.MM.YY  " />
          </div>
          <el-select v-model="filterCategories" multiple collapse-tags clearable style="max-width: 200px">
            <el-option v-for="category in categories" :key="category" :value="category" :label="category" />
          </el-select>
        </el-row>
        <el-row class="budget-card__tags">
          <el-tag v-for="[category, amount] in budgetCategories" :key="category">
            {{ `${category} ${formatCurrencyToRUB(amount)}` }}
          </el-tag>
        </el-row>
        <el-row class="budget-card__table">
          <BudgetTable :data="filteredBudgetByCategories" />
        </el-row>
      </el-col>
      <el-col :span="7" class="budget-card__chart">
        <BudgetChart :data="budgetCategories" />
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss">
.budget-card {
  &__controls {
    margin-bottom: 10px;

    > div + div {
      margin-left: 15px;
    }
  }

  &__tags {
    margin-bottom: 10px;

    > .el-tag + .el-tag {
      margin-left: 5px;
    }
  }
  &__chart {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .el-row + .el-row {
    margin-left: 10px;
  }
}

.budget-card + .budget-card {
  margin-top: 20px;
}
</style>
