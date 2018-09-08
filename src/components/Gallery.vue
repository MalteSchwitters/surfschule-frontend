<template>
    <div class="relative w-full bg-grey mb-2">
        <div class="w-full px-2 py-2 xl:px-0 xl:py-0 flex items-center overflow-x-scroll xl:overflow-hidden">
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image1"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image2"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
            <img class="w-full rounded shadow xl:w-1/4 xl:flex-grow xl:rounded-none xl:shadow-none" :src="image3"/>
            <img class="px-1 xl:hidden" src="../assets/transparent-1x1.png"/>
        </div>
        <div class="absolute pin-b w-full flex justify-center mb-4 xl:hidden">
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full"></div>
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full bg-grey-lighter"></div>
            <div class="w-4 h-4 mx-2 border-2 border-grey-lighter rounded-full"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Gallery"
    })
    export default class Gallery extends Vue {

        // { 'background': 'url(' + require('./../assets/backgrounds/wood.jpeg') + ')' },
        @Prop({ default: null })
        private image1: string;

        @Prop({ default: null })
        private image2: string;

        @Prop({ default: null })
        private image3: string;
    }
</script>
