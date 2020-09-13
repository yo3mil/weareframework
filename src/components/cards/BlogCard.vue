<template>
    <div 
        class="card"
        :class="content.size === 'small' ? 'small' : 'normal'"
        :style="cssProps"  
        @click="goTo"
    >
        <div class="card__container">
            <div class="card__info">
                <h3 class="card__info-heading">{{content.heading}}</h3>
                <hr class="card__info-line"/>
                <div class="card__info-text">{{content.text}}</div>
            </div>
            <div class="card__info-link"><span>Continue Reading</span> &#8594;</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: { content: { type: Object, required: true } },
        data() {
            return {
                cssProps: {
                    backgroundImage: `url(${require('./../../assets/cards/' + this.content.img)})`
                }
            }
        },
        methods: {
            goTo() {
                alert("🎉🎉🎉")
            }
        }
    }
</script>
<style lang="scss" scoped>
    .small { height: 30rem; }
    .normal { height: 35rem; }
    .card {
        width: 22rem;
        background-size: cover;
        margin-bottom: 4vw;
        border-radius: 2%;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        @media (max-width: 750px) {
            width: 18rem;
        } 
        &__circle {
            z-index: 2;
            position: absolute;
            left: -5rem;
            bottom: -10rem;
            background: linear-gradient(90deg, rgba($color-secondary,0.6) 0%, rgba($color-secondary,.2) 100%);
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
        &__container {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            transition: all 1s;
            background: linear-gradient(180deg, rgba($color-black,0.2) 0%, rgba($color-black,.8) 100%);
            &:hover { background-color: rgba($color-main, 0.8); }
            &:hover .card__info-link { opacity: 1; }
            &:hover .card__info { margin-bottom: 40%; }
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
            transition: all .5s;
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
            &-link {
                z-index: 4;
                opacity: 0;
                font-size: 1.1rem;
                color: $color-white;
                width: 85%;
                margin-bottom: 2rem;
                transition: all 1s;
                & span {
                    text-decoration: underline;
                }
            }
        }
        
    }
    
</style>