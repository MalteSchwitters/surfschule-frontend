<template>
    <div class="">
        <img class="" src="../assets/weather/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#wetter" class="text-grey-darker hover:text-blue uppercase no-underline"># Wetter</a>
            <a href="#webcam" class="text-grey-darker hover:text-blue uppercase no-underline"># Webcam</a>
        </nav>

        <div class="px-32 py-6">
            <h1 class="pt-8 text-2xl xl:text-3xl">Wetter</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-sm xl:text-lg">
                TODO
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Weather extends Vue {

    }
</script>
