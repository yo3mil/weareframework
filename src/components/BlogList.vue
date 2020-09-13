<template>
    <div class="blogs">
        <div class="blogs__nav">
            <h2 @click="showAll" :class="{active: category === 'all'}">all</h2>
            <h2 @click="filterTypes('branding')" :class="{active: category === 'branding'}">branding</h2>
            <h2 @click="filterTypes('UX')" :class="{active: category === 'UX'}">UX/UI</h2>
        </div>
        <div v-masonry gutter="82" transition-duration=".8s" fit-width="true">
            <BlogCard
                v-masonry-tile
                v-for="card in filtered"
                :key="card.id"
                :content="card"
            ></BlogCard>
        </div>
    </div>
</template>
<script>
import BlogCard from "./cards/BlogCard";
export default {
    components: {
        BlogCard
    },
    data() {
        return {
            category: "all",
            filtered: [],
            cardData: [
                { id: 1, img: '1.png', heading: "Every Designer's Workplace Fantasy.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'branding', size: "normal" },
                { id: 2, img: '2.png', heading: "Promotional Advertising Specially For You.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "small"},
                { id: 3, img: '3.png', heading: "Get Best Advertiser in Your Side Pocket.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "normal" },
                { id: 4, img: '4.png', heading: "Importance Of The Custom Company Logo Design.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "normal" },
                { id: 5, img: '12.png', heading: "Finally a Top Secret Way You Can Get Google Pay Per Clicks", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'branding', size: "normal" },
                { id: 6, img: '6.png', heading: "Where To Look For Cheap Brochure Printing", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "normal"},
                { id: 7, img: '7.png', heading: "Every Designer's Workplace Fantasy.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'branding', size: "normal" },
                { id: 8, img: '8.png', heading: "Promotional Advertising Specially For You.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "normal" },
                { id: 9, img: '9.png', heading: "Importance Of The Company Logo Design.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "small" },
                { id: 10, img: '10.png', heading: "6 Powerful Tips How To Enhance User Experiance", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "normal" },
                { id: 11, img: '11.png', heading: "Great Way to get Attention", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'branding', size: "normal" },
                { id: 12, img: '12.png', heading: "Free Classfields Using Them To Promote Stuff", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis, turpis…", type: 'UX', size: "small" },
            ]
        }
    },
    mounted() {
       this.showAll()
    },
    methods: {
        showAll() {
            this.filtered = [];
            this.category = "all";
            for (let i = 0; i < this.cardData.length; i++) {
                this.filtered.push(this.cardData[i])
            }
        },
        filterTypes(category) {
            this.filtered = [];
            this.category = category;
            for (let i = 0; i < this.cardData.length; i++) {
                if(this.cardData[i].type === category) {
                    this.filtered.push(this.cardData[i])
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .gutter {
        width: 100%;
    }
    .active {
        color: $color-main;
        transform: scale(1.5);
        font-weight: 600;
    }
    .blogs {
        grid-row: 3;
        grid-column: 2;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-items: center;
        margin-top: 2rem;
        // for masonry reload
        width: 64vw;
        @media (max-width: 1500px) { width: 80vw; }      
        @media (max-width: 750px) { width: 90vw; }   
        &__nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 0 0 20vh;
            width: 25rem;
            @media (max-width: 750px) { width: 65%;} 
            & h2 {
                cursor: pointer;
                transition: all .5s;
                &:hover { color: $color-main; }
            }
        }
        
    }
</style>