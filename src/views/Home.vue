<template>
  <main class="home grid_main">
    <HeroSection/>
    <BlogList/>
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection"
import BlogList from "../components/BlogList";
export default {
  components: {
    HeroSection,
    BlogList
  }
}
</script>
<style lang="scss" scoped>
  .home {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }
</style>