<template>
    <div class="social">
        <div class="social__link">Contact</div>
        <img class="social__icon" src="./../../assets/fb.png" alt="fb icon">
        <img class="social__icon" src="./../../assets/tw.png" alt="tw icon">
    </div>
</template>
<style lang="scss">
    .social {
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 10rem;
       height: 2.8rem;
       margin-top: -.8rem;
       cursor: pointer;
       &__link {
           color: $color-white;
           font-size: 1.2rem;
           font-weight: 600;
           &:hover {
               text-decoration: underline;
           }
       }
       &__icon {
           height: 1rem;
           padding: auto 1rem;
           transition: all .5s;
           &:hover {
                filter: drop-shadow(0 0 1.2rem $color-white); 
                transform: scale(1.2); 
            }
       }
    }
</style>