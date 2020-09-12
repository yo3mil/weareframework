<template>
  <div class="blank__banner"></div>
</template>
<style lang="scss" scoped>
    .blank__banner {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        background: $color-main;
        background: linear-gradient(
            125deg, rgba($color-white,.8) 
            0%, rgba($color-main, .8) 
            40%, rgba($color-white,.8) 100%);
        overflow: hidden;
    }
</style>