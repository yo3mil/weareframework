<template>
  <div class="card" :style="cssProps" >
      <h3 class="card__heading">{{content.heading}}</h3>
      <div class="card__line"></div>
      <div class="card__text">{{content.text}}</div>
      <!-- :style="{'background-image': `url('./../../assets/cards/1.png')`}" -->
  </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                cssProps: {
                    backgroundImage: `url(${require('./../../assets/cards/' + this.content.img)})`
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        height: 35rem;
        width: 100%;
        background-size: cover;
       
      
        & img {
            width: 100%;
            height: 100%;
        }
    }
    
</style>