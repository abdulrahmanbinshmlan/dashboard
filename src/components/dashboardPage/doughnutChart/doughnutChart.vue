<template>
    <div class="border bg-white">
    <Doughnut :data="chartData" :option="options" :style="myStyles" />
  </div>
  </template>
  
  <script>
  import { Doughnut } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  
  ChartJS.register(
    Title,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  
  export default {
    components: { Doughnut },
    data() {
      return {
        chartData: {
          labels: [
            "Male",
            "Female",
          ],
          datasets: [
            {
              backgroundColor: ["#4f46e5", "#22c55e"],
              data: [40, 20],
            }
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
  };
  </script>
  