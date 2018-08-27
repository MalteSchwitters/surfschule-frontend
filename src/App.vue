<template>
    <div id="app" class="">
        <div>
            <navbar class="fixed w-full z-10 shadow-md"></navbar>
            <div class="min-h-screen flex flex-col">
                <div class="h-16"></div>
                <div class="flex-1 w-full flex items-stretch">
                    <router-view class="flex-1"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Navbar from './components/Navbar.vue';

    @Component({
        components: {
            Navbar,
        }
    })

    export default class App extends Vue {

        private created() {

        }
    }
</script>

<style src="./styles/main.css"></style>
