<template>
    <div class="relative w-full bg-grey mb-2">
        <div class="w-full px-2 py-2 xl:px-0 xl:py-0 flex items-center overflow-x-scroll xl:overflow-hidden"
             ref="scrollcontainer" v-scroll="onScroll">
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image1"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image2"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image3"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
        </div>
        <div class="absolute pin-b w-full flex justify-center mb-4 md:hidden">
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full" :class="{'bg-grey-lighter': scrollover === 0}"></div>
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full" :class="{'bg-grey-lighter': scrollover === 1}"></div>
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full" :class="{'bg-grey-lighter': scrollover === 2}"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import vuescroll from 'vue-scroll';

    Vue.use(vuescroll);

    @Component({
        name: "Gallery"
    })
    export default class Gallery extends Vue {

        // { 'background': 'url(' + require('./../assets/backgrounds/wood.jpeg') + ')' },
        @Prop({ default: null })
        private image1!: string;

        @Prop({ default: null })
        private image2!: string;

        @Prop({ default: null })
        private image3!: string;

        private scrollover = 0;

        private scrollcounter = 0;

        private created() {

        }

        private onScroll(event: any, position: any) {

            const container = (<HTMLDivElement>this.$refs.scrollcontainer);
            const scrollPosition = position.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const itemWidth = scrollWidth / 6;

            if (scrollPosition < itemWidth) {
                this.scrollover = 0;
            } else if (scrollPosition < 3 * itemWidth) {
                this.scrollover = 1;
            } else {
                this.scrollover = 2;
            }
            const goal = this.scrollover * itemWidth * 2;

            // used to determine when scrolling ends
            this.scrollcounter += 1;
            const currentscrollcounter = this.scrollcounter;
            const that = this;

            setTimeout(function() {
                if (that.scrollcounter === currentscrollcounter) {
                    console.log('Snap to ' + that.scrollover);
                    let animateScroll = function () {
                        const change = goal - container.scrollLeft
                        if (change < 20 && change > -20) {
                            container.scrollLeft = goal;
                        } else if (change > 0) {
                            container.scrollLeft += 20;
                            setTimeout(animateScroll, 20);
                        } else {
                            container.scrollLeft -= 20;
                            setTimeout(animateScroll, 20);
                        }
                    };
                    animateScroll();
                }
            }, 500);
        }
    }
</script>
