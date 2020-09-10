<template>
  <div class="navigation">
    <div class="navigation__console">
        <div class="navigation__console-burger"></div>
        <a class="navigation__console-link" href="#">Contact</a>
        <a class="navigation__console-link" href="#">FB</a>
        <a class="navigation__console-link" href="#">Tw</a>
    </div>
    <div class="navigation__bg"></div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .navigation {
        grid-row: 1;
        grid-column: 3;
        position: relative;
        &__bg {
            position: absolute;
            background-color: rgba($color-secondary, .8);
            border-radius: 50%;
            height: 35rem;
            width: 35rem;
            top: -20rem;
            right: -14rem;
        }
        &__console {
            position: absolute;
            z-index: 100;
            display: flex;
            
            &-link {
                cursor: pointer;
                & a:active,
                & a:visited {
                    
                    text-decoration: none;
                }
                
                
            }
            

            &-burger {

            }
            
        }
        
    }
</style>