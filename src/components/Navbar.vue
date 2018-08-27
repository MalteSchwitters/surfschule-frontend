<template>
    <nav class="h-16 flex bg-white print:hidden z-20">
        <router-link to="/" class="w-96 flex flex-no-shrink no-underline text-grey-darkest">
        </router-link>

        <div class="w-full flex-grow flex mx-2">
            <router-link to="surfing" class="text-grey-darkest px-4 py-6 font-bold hover:underline no-underline">
                Surfing
            </router-link>
            <router-link to="sup" class="text-grey-darkest px-4 py-6 font-bold hover:underline no-underline">
                SUP
            </router-link>
            <div class="flex-grow"></div>
            <router-link to="sailing" class="text-grey-darkest px-4 py-6 font-bold hover:underline no-underline">
                Sailing
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Navbar"
    })
    export default class Navbar extends Vue {

        private async created() {

        }
     }
</script>
