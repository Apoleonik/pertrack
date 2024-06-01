<script setup>
import CircleChart from '@/components/CircleChart.vue';
import { reactive } from 'vue';

const fakeData = reactive([
  { icon: '1', name: 'A', amount: 123, category: 'S' },
  { icon: '2', name: 'B', amount: 134, category: 'AA' },
  { icon: '3', name: 'X', amount: 1233, category: 'DDD' },
  { icon: '4', name: 'D', amount: 1223, category: 'TEF' },
  { icon: '5', name: 'F', amount: 1623, category: 'F' },
  { icon: '6', name: 'S', amount: 21323, category: 'S' }
]);
</script>

<template>
  <el-card header="Expenses" class="expense-card">
    <el-row>
      <el-col :span="17">
        <el-row class="expense-card__controls">
          <el-date-picker />
          <el-select style="width: 200px" />
        </el-row>
        <el-row class="expense-card__tags">
          <el-tag>Test</el-tag>
          <el-tag>Test</el-tag>
          <el-tag>Test</el-tag>
          <el-tag>Test</el-tag>
        </el-row>
        <el-row class="expense-card__table">
          <el-table :data="fakeData">
            <el-table-column prop="icon" label="Icon" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="amount" label="Amount" />
            <el-table-column prop="category" label="Category" />
          </el-table>
        </el-row>
      </el-col>
      <el-col :span="7" class="expense-card__chart">
        <CircleChart />
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss">
.expense-card {
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

.expense-card + .expense-card {
  margin-top: 20px;
}
</style>
