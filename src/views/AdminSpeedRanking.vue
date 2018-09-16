<template>
    <div>
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/contact/header.jpg"/>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="post ranking" class="anchor"></a>
                <h1 class="pt-8">Neuen Topspeed eintragen</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <div class="xl:flex justify-between">
                    <form class="pt-8 w-full xl:w-1/2">
                        <div class="table w-full">
                            <div class="table-row">
                                <p class="pr-8 table-cell">Name</p>
                                <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                       placeholder="Max Mustermann"
                                       v-model="driver"/>
                            </div>
                            <div class="table-row">
                                <p class="pr-8 table-cell">Top Speed</p>
                                <input placeholder="66.7"
                                       class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                       v-model="speed"/>
                            </div>
                            <div class="table-row">
                                <p class="pr-8 table-cell">Datum</p>
                                <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                       placeholder="2018-09-11" v-model="date"/>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                    @click="send()">
                                Absenden
                            </button>
                        </div>
                    </form>
                    <div class="w-1/3 invisible xl:visible">
                        <img src="../assets/surfing/thumbs/surfen03.jpg"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Axios from 'axios';
    import Gallery from '../components/Gallery.vue';

    @Component({components: {Gallery}})
    export default class Contact extends Vue {

        private driver = '';
        private speed = 0.0;
        private date = '';

        private send() {
            Axios.post(`https://api.grosses-meer.surf/api/speedranking?name=${this.driver}&speed=${this.speed}&date=${this.date}`)
                .then((response) => {
                    this.driver = '';
                    this.speed = 0.0;
                    this.date = '';
                });
        }

        private created() {
            Axios.get(`https://api.grosses-meer.surf/api/auth?token=${this.$route.query.auth}`)
                .catch((response) => {
                    this.$router.push('/home');
                });
        }
    }
</script>
