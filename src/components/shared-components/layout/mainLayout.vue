<template>
  <div class="min-h-screen">
    <headerDashboard />
    <sideNav />
  </div>
</template>

<script>
import headerDashboard from './headerDashboard/headerDashboard.vue'
import SideNav from './sideNav/sideNav.vue'

export default {

  components: {
    headerDashboard,
    SideNav
  }
}
</script>

<style>

</style>