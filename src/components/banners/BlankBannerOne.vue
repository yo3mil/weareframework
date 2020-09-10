<template>
  <div class="blank__banner">

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .blank__banner {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        background: $color-secondary;
        background: linear-gradient(
            125deg, rgba($color-secondary,1) 
            0%, rgba($color-secondary, 0.7) 
            40%, rgba($color-secondary,1) 100%);
        overflow: hidden;
    }
</style>