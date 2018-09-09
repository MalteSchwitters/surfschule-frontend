<template>
    <div class="relative w-full bg-grey pb-2">
        <div class="w-full px-2 py-2 xl:px-0 xl:py-0 flex items-center overflow-x-scroll xl:overflow-hidden"
             ref="scrollcontainer" v-scroll="onScroll">
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image1"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image2"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image3"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
        </div>
        <div class="absolute pin-b w-full flex justify-center mb-6 md:hidden opacity-75">
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

        @Prop({ default: null })
        private image1!: string;

        @Prop({ default: null })
        private image2!: string;

        @Prop({ default: null })
        private image3!: string;

        private scrollover = 0;

        private autoScrolling = false;
        private scrollDirection = 0;
        private lastScrollPosition = 0;

        private onScroll(event: any, position: any) {
            const container = (<HTMLDivElement>this.$refs.scrollcontainer);
            const newScrollDirection = position.scrollLeft - this.lastScrollPosition;
            this.lastScrollPosition = position.scrollLeft;

            if (newScrollDirection < -5 || newScrollDirection > 5) {
                this.scrollDirection = newScrollDirection;
            } else {
                if (!this.autoScrolling) {
                    this.autoScrolling = true;
                    this.scrollToSnap(container, this.scrollDirection, this.lastScrollPosition);
                }
            }
        }

        private scrollToSnap(container: any, scrollDirectionn: number, scrollPosition: number) {
            let target = 0;
            const snapWidth = container.scrollWidth / 6;
            if (scrollDirectionn > 0) {
                if (scrollPosition < 2 * snapWidth) {
                    target = 2 * snapWidth;
                    this.scrollover = 1;
                } else {
                    target = 4 * snapWidth;
                    this.scrollover = 2;
                }
            } else {
                if (scrollPosition > 2 * snapWidth) {
                    target = 2 * snapWidth;
                    this.scrollover = 1;
                } else {
                    target = 0;
                    this.scrollover = 0;
                }
            }

            const that = this;
            let animateScroll = function () {
                const remaining = target - container.scrollLeft
                if (remaining < 20 && remaining > -20) {
                    container.scrollLeft = target;
                    that.autoScrolling = false;
                } else if (remaining > 0) {
                    container.scrollLeft += 20;
                    setTimeout(animateScroll, 20);
                } else {
                    container.scrollLeft -= 20;
                    setTimeout(animateScroll, 20);
                }
            };
            animateScroll();
        }
    }
</script>
