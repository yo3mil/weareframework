<template>
  <div class="navigation">
    <div class="navigation__header">
        <img src="./../assets/logo1.png" alt="logo icon">
        <h2 class="navigation__header-title">DesignerBlog</h2>
    </div>
    <div class="navigation__console">
        <div @click="toggleMenu" :class="{cross: menu}" class="navigation__btn">
            <div class="navigation__btn-icon">&nbsp;</div>
        </div>
        <div class="navigation__console-social">Contact</div>
        <img class="navigation__console-social" src="./../assets/fb.png" alt="fb icon">
        <img class="navigation__console-social" src="./../assets/tw.png" alt="tw icon">
    </div>
    <div :class="{active: menu}" class="navigation__bg"></div>
    <transition name="slide-right-left">
        <div @click="toggleMenu" v-if="menu" class="navigation__menu">
            <router-link  tag="div" to="/" class="navigation__menu-item">Home</router-link>
            <router-link  tag="div" to="/about" class="navigation__menu-item">About</router-link>
            <router-link  tag="div" to="/blog" class="navigation__menu-item">Blog</router-link>
            <router-link  tag="div" to="/contact" class="navigation__menu-item">Gallery</router-link>
        </div>
    </transition>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: false
            }
        },
        methods: {
            toggleMenu() {
                this.menu = !this.menu;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .active {
        transform: scale(2) translate(25%, -5%);
        border-radius: 2% !important;
        @media (max-width: 1250px) {
            transform: scale(2) translate(35%, -5%);  
        } 
        @media (max-width: 750px) {
            transform: scale(8) translate(0%, 0%);

        } 
    }
    .navigation__btn.cross .navigation__btn-icon{
        background-color: transparent;
    }
    .navigation__btn.cross .navigation__btn-icon:before {
        top: 0;
        transform: rotate(-135deg);
    }
    .navigation__btn.cross .navigation__btn-icon:after {
        top: 0;
        transform: rotate(135deg);
    }
    .navigation {
        z-index: 1000;
        grid-row: 1;
        grid-column: 1 / -1;
        position: relative;
        @media (max-width: 750px) {
            position: fixed;
            width: 100%;
            height: 10vh;
        }
        &__btn {
            cursor: pointer;
            width: 3rem;
            margin-top: 1rem;
            height: 3rem;
            &-icon {
                position: relative;
                & {
                    width: 1.2rem;
                    height: 3px;
                    background-color: $color-white;
                    display: inline-block;
                }
                &::before,
                &::after {
                    width: 2rem;
                    height: 3px;
                    background-color: $color-white;
                    display: inline-block;
                }

                &::before,
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    transition: all .2s;

                }

                &::before { top: -.7rem; }
                &::after { top: .7rem; }
            }
        }
        &__menu {
            z-index: 1000;
            position: absolute;
            margin-right: -2.2rem;
            width: 22rem;
            top: 10vh;
            right: 0;
            margin-top: 5vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (max-width: 750px) {
                width: 100vw;
                height: 50vh;
                top: 0;
                right: 0;
                justify-content: space-between;
                margin-right: 0;
                margin-top: 24vh;
            }
            &-item {
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
                &:hover { transform: scale(1.1); }
                &:active { transform: scale(1); }
            }
        }
        &__header,
        &__console {
            width: 22rem;
            height: 100%;
            top: 0;
            position: absolute;
            display: flex;
        }
        &__header {
            z-index: 500;
            left: 0;
            justify-content: center;
            align-items: center;
            color: $color-secondary;
            @media (max-width: 750px) {
                display: none;
            }
            & h2 {
                cursor: pointer;
                font-weight: 400;
                margin-left: .5rem;
            }
        }
        &__console {
            z-index: 900;
            right: 0;
            align-items: center;
            justify-content: space-evenly;
            animation: fade-in 1s forwards;
            opacity: 0;
            @media (max-width: 750px) { width: 15%; } 
            &-social {
                @media (max-width: 750px) { display: none;} 
            }
            & div {
                color: $color-white;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                transition: all .5s;
                padding-bottom: 2px;
            }
            & img {
                height: 1.2rem;
                cursor: pointer;
                transition: all .2s;
                &:hover { transform: scale(1.1); }
                @media (max-width: 750px) { height: 1.5rem; } 
            }
        }
        &__bg {
            z-index: 800;
            position: absolute;
            right: -22rem;
            top: -32rem;
            border-radius: 50%;
            height: 49rem;
            width: 49rem;
            transition: all 1.5s;
            animation: fade-in 1s forwards;
            background: $color-secondary;
            background: radial-gradient(
                circle, rgba($color-secondary,1) 0%,
                 rgba($color-main,1) 0%, 
                 rgba($color-secondary,1) 70%);
            @media (max-width: 1250px) {
                top: -40rem;
                right: -16rem;
            } 
            @media (max-width: 750px) {
                height: 18rem;
                width: 18rem;
                top: -10rem;
                right: -10rem;
            } 
        }
    }
        
    
</style>