<template>
    <div class="relative w-full pb-2 xl:pb-0">

        <section ref="overlay" class="overlay z-40 bg-white" aria-hidden="true">
            <div class="h-full w-full flex flex-col justify-end items-center">
                <div class="relative">
                    <img ref="highresimg" class="" :src="imageFullscreen">
                    <div class="absolute pin-y pin-l flex items-center opacity-75">
                        <img class="py-16 pl-4 pr-6"
                             src="https://png.icons8.com/ios/40/ffffff/less-than.png"
                             @click.stop="imageFullscreen = image1">
                    </div>
                    <div class="absolute pin-y pin-r flex items-center opacity-75">
                        <img class="py-16 pr-4 pl-6"
                             src="https://png.icons8.com/ios/40/ffffff/more-than.png"
                             @click.stop="imageFullscreen = image2">
                    </div>
                </div>
                <div class="h-48 w-full"></div>
            </div>
            <div class="px-2 md:px-8 fixed pin-t w-full flex items-center bg-black-transparent-60">
                <p class="text-white text-xl font-sans font-thin">1 / 3</p>
                <div class="flex-grow"></div>
                <button class="p-4 hover:bg-black opacity-75" @click="closeFullres()">
                    <img class="w-6" src="https://png.icons8.com/ios/40/ffffff/external-link.png">
                </button>
                <button class="p-4 hover:bg-black opacity-75" @click.stop="openFullscreen($refs.highresimg)">
                    <img class="w-6" src="https://png.icons8.com/ios/40/ffffff/fit-to-width.png">
                </button>
                <button class="p-4 hover:bg-black opacity-75" @click="closeFullres()">
                    <img class="w-6" src="https://png.icons8.com/ios/40/ffffff/delete-sign.png">
                </button>
            </div>
        </section>

        <div class="w-full px-2 xl:px-0 flex items-center overflow-x-auto xl:overflow-hidden"
             ref="scrollcontainer" v-scroll="onScroll">
            <img class="min-w-full sm:min-w-0 sm:w-1/3 rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none cursor-pointer"
                 :src="image1_thumb" @click="openFullres(image1)"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="min-w-full sm:min-w-0 sm:w-1/3 rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none cursor-pointer"
                 :src="image2_thumb" @click="openFullres(image2)"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="min-w-full sm:min-w-0 sm:w-1/3 rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none cursor-pointer"
                 :src="image3_thumb" @click="openFullres(image3)"/>
            <img class="px-1 sm:hidden" src="../assets/transparent-1x1.png"/>
        </div>

        <!--<div class="md:hidden absolute pin-y pin-l my-16 flex flex-col justify-center opacity-75"-->
        <!--@click="scrollToImage($refs.scrollcontainer, scrollover - 1)">-->
        <!--<img class="pl-2 pr-8" src="https://png.icons8.com/ios/40/ffffff/less-than.png">-->
        <!--</div>-->

        <!--<div class="md:hidden absolute pin-y pin-r my-16 flex flex-col justify-center opacity-75"-->
        <!--@click="scrollToImage($refs.scrollcontainer, scrollover + 1)">-->
        <!--<img class="pr-2 pl-8" src="https://png.icons8.com/ios/40/ffffff/more-than.png">-->
        <!--</div>-->

        <div class="sm:hidden absolute pin-b mb-4 w-full flex flex-col opacity-75 pointer-events-none">
            <div class="flex justify-center ">
                <div class="w-4 h-4 mx-2 border-2 border-white rounded-full"
                     :class="{'bg-grey-lighter': scrollover === 0}"></div>
                <div class="w-4 h-4 mx-2 border-2 border-white rounded-full"
                     :class="{'bg-grey-lighter': scrollover === 1}"></div>
                <div class="w-4 h-4 mx-2 border-2 border-white rounded-full"
                     :class="{'bg-grey-lighter': scrollover === 2}"></div>
            </div>
        </div>
    </div>
</template>

<style>

    .overlay {
        position: fixed;
        overflow-y: scroll;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    [aria-hidden="true"] {
        display: none;
    }

    [aria-hidden="false"] {
        display: block;
    }

    .overlay {
        background: rgba(40, 40, 40, 0.8);
    }

</style>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: "Gallery"
    })
    export default class Gallery extends Vue {

        @Prop({default: null})
        private image1_thumb!: string;

        @Prop({default: null})
        private image1!: string;

        @Prop({default: null})
        private image2_thumb!: string;

        @Prop({default: null})
        private image2!: string;

        @Prop({default: null})
        private image3_thumb!: string;

        @Prop({default: null})
        private image3!: string;

        private imageFullscreen = '';

        private imageCount = 3;
        private scrollover = 0;
        private scrollAnimation = 0;

        private autoScrolling = false;
        private scrollDirection = 0;
        private lastScrollPosition = 0;

        private openFullscreen(elem: any) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }

        private closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }

        private openFullres(imageurl: String) {
            this.imageFullscreen = imageurl;
            document.body.classList.toggle('overflow-hidden', true);
            this.$refs.overlay.setAttribute('aria-hidden', false);
            // this.openFullscreen(this.$refs.overlay);
        }

        private closeFullres() {
            this.imageFullscreen = '';
            document.body.classList.toggle('overflow-hidden', false);
            this.$refs.overlay.setAttribute('aria-hidden', true);
            // this.closeFullscreen();
        }

        private onScroll(event: any, position: any) {
            const container = (<HTMLDivElement>this.$refs.scrollcontainer);
            const snapWidth = container.scrollWidth / (this.imageCount * 2);
            if (position.scrollLeft < snapWidth) {
                this.scrollover = 0;
            } else if (position.scrollLeft < 3 * snapWidth) {
                this.scrollover = 1;
            } else {
                this.scrollover = 2;
            }

            // const newScrollDirection = position.scrollLeft - this.lastScrollPosition;
            // this.lastScrollPosition = position.scrollLeft;

            // if (Math.abs(newScrollDirection) < Math.abs(this.scrollDirection)) {
            //     if (!this.autoScrolling) {
            //         this.autoScrolling = true;
            //         this.scrollToSnap(container, this.scrollDirection, this.lastScrollPosition);
            //     }
            // } else {
            //     this.scrollDirection = newScrollDirection;
            // }

            // if (newScrollDirection < -5 || newScrollDirection > 5) {
            //     this.scrollDirection = newScrollDirection;
            // } else {
            //     if (!this.autoScrolling) {
            //         this.autoScrolling = true;
            //         this.scrollToSnap(container, this.scrollDirection, this.lastScrollPosition);
            //     }
            // }
        }

        private scrollToImage(container: HTMLDivElement, imageNumber: number) {
            const scrollWidth = container.scrollWidth;
            const viewWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const imageWidth = scrollWidth / this.imageCount;

            if (imageNumber < 0) {
                imageNumber = 0;
            }
            if (imageNumber >= this.imageCount) {
                imageNumber = this.imageCount - 1;
            }
            // if (scrollLeft < imageNumber * imageWidth) {
            //     imageNumber -= 1;
            // }
            const imageCenterOffset = imageNumber > 0 ? (viewWidth - imageWidth) / 2 : 0;
            const targetScrollLeft = imageNumber * imageWidth - imageCenterOffset;

            this.scrollAnimation = imageNumber >= this.scrollover ? 40 : -40;

            console.log(targetScrollLeft);

            const outerThis = this;
            let animateScroll = function () {
                const remaining = targetScrollLeft - container.scrollLeft
                if (Math.abs(remaining) < Math.abs(outerThis.scrollAnimation)) {
                    container.scrollLeft = targetScrollLeft;
                    outerThis.scrollAnimation = 0;
                    // outerThis.scrollover = imageNumber;
                } else {
                    container.scrollLeft += outerThis.scrollAnimation;
                    setTimeout(animateScroll, 20);
                }
            };
            animateScroll();

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
