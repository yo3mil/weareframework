<template>
    <div class="hero">
        <transition name="fade" mode="out-in">
            <MobileBanner v-if="banner === 1"></MobileBanner>
            <BlankBannerOne v-if="banner === 2"></BlankBannerOne>
            <BlankBannerTwo v-if="banner === 3"></BlankBannerTwo>
        </transition>
        <div @click="nextBanner" class="hero__nav">Next &#62;</div>
        <div class="hero__slider">
            <div :style="{ left: `${slider}rem` }"></div>
        </div>
        <div class="hero__circle"></div>
    </div>
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
    mounted() {
        //this.toggleBanners();
    },
    methods: {
        nextBanner() {
            if(this.banner === 1 || this.banner === 2) {
                this.banner++
                this.slider = this.slider + 4;
            } else {
                this.banner = 1;
                this.slider = 0;
            }
        },
        toggleBanners() {
            setTimeout(() =>{
                this.nextBanner()
                this.toggleBanners()
            }, 5000)
        }
    }
}
</script>
<style lang="scss" scoped>
    .slider-mid {
        left: 4rem;
    }
    .slider-end {
        left: 8rem;
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
            40%, rgba($color-main,1) 100%);
        &__nav {
            position: absolute;
            top: 50%;
            right: 6vw;
            font-size: 1.2rem;
            color: $color-secondary;
            cursor: pointer;
            &:hover {
                border-bottom: 1px solid $color-secondary;
            }
        }
        &__slider {
            position: absolute;
            bottom: 10vh;
            border: 1px solid rgba($color-white, .5);
            width: 12rem;
            left: 50%;
            transform: translateX(-50%);
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
            
        }
    }
</style>