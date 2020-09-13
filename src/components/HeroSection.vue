<template>
    <v-touch 
        class="hero" 
        @swipeleft="nextBanner" 
        @swiperight="previousBanner"
        :swipe-options="{ threshold: 200, direction: 'horizontal'}"
    >
        <transition name="fade" mode="out-in">
            <MobileBanner v-if="banner === 1"></MobileBanner>
            <BlankBannerOne v-if="banner === 2"></BlankBannerOne>
            <BlankBannerTwo v-if="banner === 3"></BlankBannerTwo>
        </transition>
        <div class="hero__counter">
            <h3 @click="changeBanner(1, 0)" :class="{active: banner === 1}"  class="hero__counter-number">01</h3>
            <h3 @click="changeBanner(2, 4)" :class="{active: banner === 2}" class="hero__counter-number">02</h3>
            <h3 @click="changeBanner(3, 8)" :class="{active: banner === 3}" class="hero__counter-number">03</h3>
        </div>
        <div @click="nextBanner" class="hero__nav">Next &#62;</div>
        <div class="hero__slider">
            <div :style="{ left: `${slider}rem` }"></div>
        </div>
        <div  class="hero__circle"></div>
    </v-touch>
</template>
<script>
import MobileBanner from "./banners/MobileBanner";
import BlankBannerOne from "./banners/BlankBannerOne";
import BlankBannerTwo from "./banners/BlankBannerTwo"
export default {
    components: {
        MobileBanner,
        BlankBannerOne,
        BlankBannerTwo
    },
    data() {
        return {
            banner: 1,
            slider: 0
        }
    },
    methods: {
        changeBanner(banner, slider) {
            this.banner = banner;
            this.slider = slider;
        },
        nextBanner() {
            if(this.banner !== 3 ) {
                this.banner++
                this.slider = this.slider + 4;
            } else {
                this.banner = 1;
                this.slider = 0;
            }
        },
        previousBanner()  {
            if(this.banner !== 1 ) {
                this.banner--;
                this.slider = this.slider - 4;
            } else {
                this.banner = 3;
                this.slider = 8;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .active {
        font-size: 1.6rem;
        text-decoration: underline;
    }
    .hero {
        grid-row: 1 / 3;
        grid-column: 1 / 4;
        height: 80vh;
        width: 100%;
        position: relative;
        background: $color-main;
        background: linear-gradient(
            125deg, rgba($color-main,1) 
            0%, rgba($color-main, 0.7) 
            40%, rgba($color-main,1) 100%
        );
        &__counter {
            position: absolute;
            top: 50%;
            left: 4vw;
            transform: translateY(-50%);
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            @media (max-width: 750px) {display: none;}
            &-number {
                cursor: pointer;
                color: $color-secondary;
                font-weight: 500;
                transition: all .5s;
            }
        }
        &__nav {
            position: absolute;
            top: 50%;
            right: 6vw;
            font-size: 1.2rem;
            color: $color-secondary;
            cursor: pointer;
            @media (max-width: 750px) {display: none;}
            &:hover {border-bottom: 1px solid $color-secondary;}
        }
        &__slider {
            position: absolute;
            bottom: 10vh;
            border: 1px solid rgba($color-white, .5);
            width: 12rem;
            left: 50%;
            transform: translateX(-50%);
            @media (max-width: 750px) {transform: translateX(-55%) scale(.7);}
            & div {
                transition: all .5s;
                top: -2px;
                position: absolute;
                width: 4rem;
                border: 2px solid $color-white;
            }
        }
        &__circle {
            clip-path: circle(50% at 50% 50%);
            height: 26rem;
            width: 26rem;
            background: linear-gradient(
                110deg, rgba($color-main,1) 0%,
                rgba($color-main,1) 50%,
                rgba(#36ccd6,1) 70%, 
                rgba($color-main,1) 85%),
                rgba($color-main,1) 100%;
            transform: translate(-50%, -60%);
            animation: fade-in 2s forwards;
            opacity: 0;
            @media (max-width: 1250px) { height: 18rem; width: 18rem; } 
            @media (max-width: 750px) { height: 40vw; width:40vw; }
        }
    }
</style>