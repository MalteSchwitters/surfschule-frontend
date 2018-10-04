<template>
    <div class="relative w-full pb-2 xl:pb-0">

        <section ref="overlay" class="overlay z-40 bg-white overflow-scroll scrolling-touch" aria-hidden="true"
                 tabindex="1"
                 @keydown.esc="closeFullres()">
            <div class="h-full w-full flex flex-col justify-end xl:justify-center items-center">
                <div v-if="fullresIndex >= 0" class="relative">
                    <img ref="highresimg" class="" :src="images[fullresIndex].image">

                    <div class="absolute pin-y pin-l flex items-center opacity-75">
                        <img class="py-16 pl-4 pr-6"
                             src="https://png.icons8.com/ios/40/ffffff/less-than.png"
                             @click.stop="previousImageFullres()">
                    </div>
                    <div class="absolute pin-y pin-r flex items-center opacity-75">
                        <img class="py-16 pr-4 pl-6"
                             src="https://png.icons8.com/ios/40/ffffff/more-than.png"
                             @click.stop="nextImageFullres()">
                    </div>
                </div>
                <div class="h-48 w-full xl:hidden"></div>
            </div>
            <div class="px-2 md:px-8 fixed pin-t w-full flex items-center bg-black-transparent-60">
                <p class="text-white text-xl font-sans font-thin">{{ fullresIndex + 1 }} / {{ images.length }}</p>
                <div class="flex-grow"></div>
                <button v-if="!isFullscreen" class="p-4 hover:bg-black opacity-75"
                        @click.stop="openFullscreen($refs.overlay)">
                    <img class="w-6" src="https://png.icons8.com/ios/40/ffffff/fit-to-width.png">
                </button>
                <button class="p-4 hover:bg-black opacity-75" @click="closeFullres()">
                    <img class="w-6" src="https://png.icons8.com/ios/40/ffffff/delete-sign.png">
                </button>
            </div>
        </section>

        <div class="w-full px-2 xl:px-0 flex items-center overflow-x-auto xl:overflow-hidden"
             ref="scrollcontainer" v-scroll="onScroll">
            <img v-for="(img, index) in images"
                 class="min-w-full sm:min-w-0 sm:w-1/3 xl:w-1/4 xl:flex-grow rounded shadow xl:rounded-none xl:shadow-none cursor-pointer"
                 :src="img.thumbnail" @click="openFullres(index)" :class="{ 'mr-4 xl:mr-0': index < images.length-1 }"/>
            <img class="px-1 sm:hidden" src="../assets/transparent-1x1.png"/>
        </div>

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
        private images!: { image: string, thumbnail: string }[];

        private isFullscreen = false;
        private fullresIndex = -1;

        private scrollover = 0;
        private scrollAnimation = 0;

        private autoScrolling = false;
        private scrollDirection = 0;
        private lastScrollPosition = 0;

        private openFullscreen(elem: any) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            this.isFullscreen = true;
        }

        private closeFullscreen() {
            let doc: any = document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            this.isFullscreen = false;
        }

        private openFullres(index: number) {
            this.fullresIndex = index;
            document.body.classList.toggle('overflow-hidden', true);
            (<HTMLElement>this.$refs.overlay).setAttribute('aria-hidden', 'false');
            (<HTMLElement>this.$refs.overlay).focus();
        }

        private closeFullres() {
            this.fullresIndex = -1;
            document.body.classList.toggle('overflow-hidden', false);
            (<HTMLElement>this.$refs.overlay).setAttribute('aria-hidden', 'true');
            this.closeFullscreen();
        }

        private previousImageFullres() {
            this.fullresIndex = this.fullresIndex - 1;
            if (this.fullresIndex < 0) {
                this.fullresIndex = this.images.length - 1;
            }
        }

        private nextImageFullres() {
            this.fullresIndex = this.fullresIndex + 1;
            if (this.fullresIndex > this.images.length - 1) {
                this.fullresIndex = 0;
            }
        }

        private onScroll(event: any, position: any) {
            const container = (<HTMLDivElement>this.$refs.scrollcontainer);
            const snapWidth = container.scrollWidth / (this.images.length * 2);
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
            const imageWidth = scrollWidth / this.images.length;

            if (imageNumber < 0) {
                imageNumber = 0;
            }
            if (imageNumber >= this.images.length) {
                imageNumber = this.images.length - 1;
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
