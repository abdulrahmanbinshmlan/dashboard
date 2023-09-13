<template>
  <div class="border bg-white">
  <Bar v-if="load" :data="chartData" :option="options" :style="myStyles" />
</div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

import barChartProvider from "../../../providers/barChartProvider"

export default {
  components: { Bar },
  data() {
    return {
      chartData: [],
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      load: false
    };
  },
  computed: {
    myStyles () {
      return {
        position: 'relative',
        height: `${300}px`,
        width: `${100}%`
      }
    }
  },
  async beforeMount() {
    await this.getBarChartData();
  },
  methods: {
   async getBarChartData() {
    await barChartProvider.methods.fetchBarChartData();
    if(barChartProvider.methods.getBarChartState() === "OK") {
      this.chartData = barChartProvider.methods.getBarChartData();
      this.load = true;
    } else {
      this.chartData = barChartProvider.methods.getBarChartError();
    }
    }
  }
};
</script>
