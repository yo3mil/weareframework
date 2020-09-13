<template>
  <div class="navigation">
    <router-link tag="div" to="/" class="navigation__header">
        <img src="./../assets/logo1.png" alt="logo icon">
        <h2 class="navigation__header-title">DesignerBlog</h2>
    </router-link>
    <div class="navigation__console">
        <div @click="toggleMenu" :class="{cross: menu}" class="navigation__btn">
            <div class="navigation__btn-icon">&nbsp;</div>
        </div>
        <SocialLinks class="navigation__console-social"/>
    </div>
    <div :class="{active: menu}" class="navigation__bg"></div>
    <transition name="slide-right-left">
        <Menu @menu-clicked="toggleMenu" v-if="menu"/>
    </transition>
  </div>
</template>
<script>
    import Menu from "./navigation/Menu";
    import SocialLinks from "./navigation/SocialLinks";
    export default {
        components: {
            Menu,
            SocialLinks
        },
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
    //reactive
    .active {
        transform: scale(2) translate(25%, -5%);
        border-radius: 2% !important;
        @media (max-width: 1250px) { transform: scale(2) translate(35%, -5%); } 
        @media (max-width: 750px) { transform: scale(8) translate(0%, 0%); } 
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
        width: 2rem;
        transform: rotate(135deg);
    }

    //main
    .navigation {
        z-index: 1000;
        grid-row: 1;
        grid-column: 1 / -1;
        position: relative;
        
        @media (max-width: 750px) {
            position: fixed;
            width: 100%;
            height: 7rem;
        }
        &__btn {
            cursor: pointer;
            width: 3rem;
            margin-top: 1.5rem;
            height: 3rem;
            transition: all .2s;
            @media (max-width: 750px) { 
                bottom: 0px;
                left: 20px;
                margin-top: 1rem;
            }
            &:hover { filter: drop-shadow(0 0 0.75rem $color-main); }
            &:hover &-icon,
            &:hover &-icon:after {
                width: 2rem;
            }
            &-icon {
                transition: all .5s;
                position: relative;
                & {
                    width: 1.2rem;
                    height: 3px;
                    background-color: $color-white;
                    display: inline-block;
                }
                &::before,
                &::after {
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
                &::before { top: -.7rem; width: 2rem; }
                &::after { top: .7rem; width: 1.7rem;}
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
            width: 22rem;
            height: 100%;
            top: 0;
            position: absolute;
            display: flex;
            z-index: 500;
            left: 0;
            justify-content: center;
            align-items: center;
            color: $color-secondary;
            @media (max-width: 750px) { display: none; }
            &-title {
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
            @media (max-width: 750px) { width: 5rem; } 
            &-social {
                @media (max-width: 750px) { display: none;} 
            }
        }
        &__bg {
            opacity: 1;
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
                top: -36rem;
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