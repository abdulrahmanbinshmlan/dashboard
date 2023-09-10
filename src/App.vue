<template>
 <headerDashboard />
 <sideNav />
</template>

<script>
import headerDashboard from './components/shared-components/headerDashboard/headerDashboard.vue'
import SideNav from './components/shared-components/sideNav/sideNav.vue'

export default {
  name: 'App',
  components: {
    headerDashboard,
    SideNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
