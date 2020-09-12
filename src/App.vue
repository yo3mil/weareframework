<template>
  <div id="app" class="app grid_main">
    <Navigation/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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
    overflow-x: hidden;
    @media (max-width: 1500px) {
        font-size: 55%;
    } 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
