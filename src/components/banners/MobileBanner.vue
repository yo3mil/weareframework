<template>
    <div class="banner grid2x3">
        <div class="banner__heading">
            <h2>Figma is an awesome alternative...</h2>
            <h1>But sorry my</h1>
            <h1>dearly belowed</h1>
        </div>
        <img class="banner__mobile" src="./../../assets/mobile.png" alt="hand with a mobile">
        <div v-parallax=".2" class="banner__circle1"></div>
        <div v-parallax=".2" class="banner__circle2"></div>
    </div>
</template>
<style lang="scss" scoped>
    .banner {
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        overflow: hidden;
         &__heading {
            color: $color-white;
            grid-column: 2;
            grid-row: 2;
            margin-left: 2rem;
            margin-top: 1rem;
            @media (max-width: 1250px) {
                grid-column: 1 / 3;
                justify-self: center;
                margin-left: 0;
                margin-top: 0;
            } 
            & h2 {
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateX(-30%);
                animation: fade-from-left 2s forwards;
            }
            & h1 {
                opacity: 0;
                animation: fade-from-right 1.8s forwards;
                animation-delay: 1.5s;
            }
        }

        &__mobile {
            grid-row: 2 / 4;
            grid-column: 1 / 2;
            justify-self: center;
            margin-top: -3.5rem;
            margin-right: -6rem;
            z-index: 100;
            animation: slide-down-top 1s forwards;
            animation-delay: 1s;
            transform: translateY(300%) rotate(40deg);
            @media (max-width: 1250px) { display: none; } 
        }
        &__circle1,
        &__circle2 {
            border-radius: 50%;
            opacity: 0;
            animation: fade-in 3s forwards;
        }
        &__circle1 {
            width: 8rem;
            height: 8rem;
            grid-row: 1;
            grid-column: 1;
            align-self: end;
            margin-bottom: 4rem;
            justify-self: center;
            background: linear-gradient(
            80deg, rgba($color-main, 1) 
            0%, rgba($color-white, 0.3) 
            90%, rgba($color-main,1) 100%);
            box-shadow: 0px 0px 10px 0px $color-main;
            filter: blur(4px);
        }
        &__circle2 {
            width: 4.5rem;
            height: 4.5rem;
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
            box-shadow: 0px 0px 15px 0px $color-secondary
        }
    }
</style>