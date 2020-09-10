<template>
  <div class="banner grid2x3">
    <div class="banner__heading">
        <h2>Figma is an awesome alternative...</h2>
        <h1>But sorry my</h1>
        <h1>dearly belowed</h1>
    </div>
    <img class="banner__mobile" src="./../../assets/mobile.png" alt="hand with mobile">
    
    
    <div data-depth="0" class="banner__circle1"></div>
    <div data-depth="0" class="banner__circle2"></div>
    
    
    
    
  </div>
</template>

<script>
// import Parallax from 'parallax-js';


export default {
    mounted() {
        // let scene = document.getElementById('scene');
        // let parallaxInstance = new Parallax(scene);
        // parallaxInstance.friction(0.2, 0.2);
    }
}
</script>

<style lang="scss" scoped>
    .banner {
        width: 100%;
        height: 100%;
        background: $color-main;
        background: linear-gradient(
            125deg, rgba($color-main,1) 
            0%, rgba($color-main, 0.6) 
            45%, rgba($color-main,1) 100%);
        overflow: hidden;
        &__paralax {
            width: 100%;
            height: 100%;
        }
        &__heading {
            color: $color-white;
            grid-column: 2;
            grid-row: 2;
            margin-left: 2rem;
            margin-top: 1rem;
            & h2 {
                margin-bottom: 1rem;
            }
        }

        &__mobile {
            grid-row: 2 / 4;
            grid-column: 1 / 2;
            justify-self: center;
            margin-top: -3.5rem;
            margin-right: -6rem;
           z-index: 100;
        }
        &__circle1,
        &__circle2 {
            border-radius: 50%;
            
        }
        &__circle1 {
            width: 7rem;
            height: 7rem;
            grid-row: 1;
            grid-column: 1;
            align-self: end;
            justify-self: center;
             background: linear-gradient(
            80deg, rgba($color-main, 1) 
            0%, rgba($color-white, 0.3) 
            90%, rgba($color-main,1) 100%);
            -webkit-box-shadow: 0px 0px 10px 0px $color-main;
            filter: blur(4px);
            
        }
        &__circle2 {
            width: 4rem;
            height: 4rem;
            margin-top: 2rem;
            grid-row: 3;
            grid-column: 2;
            
            background: linear-gradient(
            70deg, rgba($color-secondary, 1) 
            0%, rgba($color-white, 0.1) 
            140%, rgba($color-secondary,1) 100%);
            align-self: top;
            justify-self: center;
            filter: blur(3px);
            -webkit-box-shadow: 0px 0px 15px 0px $color-secondary
        }
    }
</style>