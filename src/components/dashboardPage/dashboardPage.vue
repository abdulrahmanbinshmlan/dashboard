<template>
  <div class="max-h-screen grid grid-rows-3">
    <div>
      <stats-card />
    </div>
    <div class="w-full">
      <bar-chart />
    </div>
    <div>
      <employee-status />
    </div>
  </div>
</template>

<script>
import barChart from './barChart/barChart.vue'
import employeeStatus from './employeeStatus/employeeStatus.vue'
import statsCard from './statsCard/statsCard.vue'

export default {
  components: { barChart, statsCard, employeeStatus },

}
</script>

<style></style>