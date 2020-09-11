<template>
  <div class="blank__banner">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .blank__banner {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        background: $color-main;
        background: linear-gradient(
            125deg, rgba($color-main,1) 
            0%, rgba($color-main, 0.7) 
            40%, rgba($color-main,1) 100%);
        overflow: hidden;
    }
</style>