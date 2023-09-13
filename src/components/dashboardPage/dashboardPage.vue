<template>
  <div class="lg:space-y-4 space-y-8 flex flex-col">
    <div>
      <stats-card />
    </div>
    <div>
      <bar-chart />
    </div>
    <div class="lg:flex lg:space-x-4 space-y-8 lg:space-y-0">
      <employee-status />
      <doughnut-chart />
    </div>
  </div>
</template>

<script>
import barChart from './barChart/barChart.vue'
import DoughnutChart from './doughnutChart/doughnutChart.vue'
import employeeStatus from './employeeStatus/employeeStatus.vue'
import statsCard from './statsCard/statsCard.vue'

export default {
  components: { barChart, statsCard, employeeStatus, DoughnutChart },

}
</script>

<style></style>