<template>
    <div 
        class="card"
        :class="content.size === 'small' ? 'small' : 'normal'"
        :style="cssProps"  
    >
        <div class="card__container">
            <div class="card__info">
                <h3 class="card__info-heading">{{content.heading}}</h3>
                <div class="card__info-line"></div>
                <div class="card__info-text">{{content.text}}</div>
            </div>
        </div>
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
    .small {
        height: 30rem;
    }
    .normal {
        height: 35rem;
    }
    .card {
        width: 22rem;
        background-size: cover;
        margin-bottom: 4vw;
        border-radius: 2%;
        overflow: hidden;
        cursor: pointer;
        
        &:hover {
            
        }
        
        &__container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            background: $color-black;
            background: linear-gradient(180deg, rgba($color-black,0.2) 0%, rgba($color-black,.8) 100%);
        }
        &__info {
            
            width: 85%;
            height: 50%;
            margin-bottom: 10%;
            color: $color-white;
            padding-right: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            &-heading {
                font-size: 2rem;
                font-weight: 300;
            }
            &-text {
                font-size: 1.2rem;
                font-weight: 300;
                
            }
            &-line {
                
                border: 1px solid $color-white;
                width: 20%;
            }
        }
        
    }
    
</style>