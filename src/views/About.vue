<template>
  <div class="blank_page grid_main">
      <h1>About</h1>
  </div>
</template>
<style lang="scss">
  // for all blanks
  .blank_page {
    grid-row: 1 /-1;
    grid-column: 1 / -1;
    height: 100vh;
    background-color: rgba($color-main, .6);
    & h1 {
      grid-column: 2;
      grid-row: 2;
      justify-self: center;
    }
  }
</style>
