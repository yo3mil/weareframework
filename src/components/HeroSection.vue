<template>
    <div class="hero">
        <MobileBanner/>
        <div class="hero__circle"></div>
    </div>
</template>
<script>
import MobileBanner from "./banners/MobileBanner"
export default {
    components: {
        MobileBanner
    }
}
</script>
<style lang="scss" scoped>
    .hero {
        grid-row: 1 / 3;
        grid-column: 1 / 4;
        height: 80vh;
        width: 100%;

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