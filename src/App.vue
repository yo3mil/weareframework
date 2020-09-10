<template>
  <div id="app" class="app grid_main">
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
import Navigation from "./components/Navigation";
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  .app {
    position: relative;
  }
  body {
    font-size: 62.5%;
    color: $color-black;
    font-family: $font-main;
    width: 100vw;
    height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
