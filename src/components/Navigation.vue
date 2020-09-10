<template>
  <div class="navigation">
    <div class="navigation__header">
        <img src="./../assets/logo1.png" alt="logo icon">
        <h2 class="navigation__header-title">DesignerBlog</h2>
    </div>
    <div class="navigation__console">
        <img @click="toggleMenu" src="./../assets/Menu.png" alt="menu icon">
        <div>Contact</div>
        <img src="./../assets/fb.png" alt="fb icon">
        <img src="./../assets/tw.png" alt="tw icon">
    </div>
    <div :class="{active: menu}" class="navigation__bg"></div>
    <div @click="toggleMenu" v-if="menu" class="navigation__menu">
        <router-link  tag="div" to="/" class="navigation__menu-item">Home</router-link>
        <router-link  tag="div" to="/about" class="navigation__menu-item">About</router-link>
        <router-link  tag="div" to="/blog" class="navigation__menu-item">Blog</router-link>
        <router-link  tag="div" to="/contact" class="navigation__menu-item">Contact us</router-link>
    </div>
    
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
        transform: scale(2) translate(15%, 10%) ;
    }
    .navigation {
        z-index: 1000;
        grid-row: 1;
        grid-column: 1 / -1;
        position: relative;
        &__menu {
            position: absolute;
            margin-right: -2.2rem;
            width: 18vw;
            top: 10vh;
            right: 0;
            margin-top: 5vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &-item {
                color: $color-white;
                font-size: 2rem;
                height:5rem ;
                width: 100%;
                transition: all .2s;
                cursor: pointer;
                &:hover {
                    transform: scale(1.1);
                }
                &:active {
                    transform: scale(1);
                }
            }
        }
        &__header,
        &__console {
            z-index: 900;
            width: 18vw;
            height: 100%;
            top: 0;
            position: absolute;
            display: flex;
        }
        &__header {
            left: 0;
            justify-content: center;
            align-items: center;
            color: $color-secondary;
            & h2 {
                cursor: pointer;
                font-weight: 400;
                margin-left: .5rem;
            }
        }
        &__console {
            
            right: 0;
            align-items: center;
            justify-content: space-evenly;
            & div {
                margin-left: 2rem;
                color: $color-white;
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                transition: all .5s;
                padding-bottom: 2px;
                &:hover {
                    border-bottom: 1px solid $color-white;
                }
            }
            & img {
                height: 1.2rem;
                cursor: pointer;
                transition: all .2s;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        &__bg {
            position: absolute;
            right: -22rem;
            top: -32rem;
            border-radius: 50%;
            height: 49rem;
            width: 49rem;
            transition: all .5s;
            
            background: rgb(1,10,114);
            background: radial-gradient(
                circle, rgba(1,10,114,1) 0%,
                 rgba(#00C3D1,1) 0%, 
                 rgba(1,10,114,1) 70%);
            
        }
    }
        
    
</style>