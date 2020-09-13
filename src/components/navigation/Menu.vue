<template>
    <div class="menu" @click="clicked">
        <router-link  tag="div" to="/" class="menu__item">Home</router-link>
        <router-link  tag="div" to="/about" class="menu__item">About</router-link>
        <router-link  tag="div" to="/blog" class="menu__item">Blog</router-link>
        <router-link  tag="div" to="/gallery" class="menu__item">Gallery</router-link>
        <SocialLinks class="menu__social"/>
    </div>
</template>
<script>
import SocialLinks from "./SocialLinks"
export default {
    components: {
        SocialLinks
    },
    methods: {
        clicked() {
            this.$emit("menu-clicked");
        }
    }
}
</script>
<style lang="scss" scoped>
    .menu {
            z-index: 1000;
            position: absolute;
            margin-right: -2.2rem;
            width: 21rem;
            top: 10vh;
            right: 0;
            margin-top: 5vh;
            flex-direction: column;
            @include flex-center;
            @media (max-width: 750px) {
                width: 100vw;
                height: 70vh;
                top: 0;
                right: 0;
                justify-content: space-between;
                margin-right: 0;
                margin-top: 24vh;
            }
            &__item {
                color: $color-white;
                font-size: 2rem;
                height:5rem ;
                width: 100%;
                transition: all .2s;
                cursor: pointer;
                @media (max-width: 750px) {
                    width: 50%;
                    text-align: center;
                }
                &:hover { transform: scale(1.1); color: $color-main; }
                &:active { transform: scale(1); }
            }
            &__social {
                display: none;
                 @media (max-width: 750px) {
                    display: flex;
                    margin-top: auto;
                    
                }
            }
        }
</style>