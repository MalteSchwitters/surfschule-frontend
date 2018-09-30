<template>
    <div>
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/surfing/header.jpg"/>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="post ranking" class="anchor"></a>
                <h1 class="pt-8">Neuen Topspeed eintragen</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <div class="xl:flex justify-between">
                    <div v-if="success">
                        <p class="pb-6 text-base xl:text-lg">
                            Neuer Topspeed für {{ driver }} wurde erfolgreich eingetragen.
                        </p>
                        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                @click="reset()">
                            Weitere Messung eintragen
                        </button>
                    </div>
                    <form v-else class="pt-8 w-full xl:w-1/2">
                        <div class="sm:table w-full">
                            <div class="sm:table-row">
                                <p class="pr-8 table-cell">Name</p>
                                <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                       placeholder="Max Mustermann"
                                       v-model="driver"/>
                            </div>
                            <div class="sm:table-row">
                                <p class="pr-8 table-cell">Top Speed</p>
                                <input placeholder="66.7"
                                       class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                       v-model="speed"/>
                            </div>
                            <div class="sm:table-row">
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

        private auth = '';
        private success = false;
        private driver = '';
        private speed = 0.0;
        private date = '';

        private reset() {
            this.driver = '';
            this.speed = 0.0;
            this.date = '';
            this.success = false;
        }

        private send() {
            Axios.post(`https://api.grosses-meer.surf/api/speedranking?auth=${this.auth}&name=${this.driver}&speed=${this.speed}&date=${this.date}`)
                .then(() => {
                    this.success = true;
                });
        }

        private created() {
            if (this.$route.query.auth !== null) {
                this.auth = this.$route.query.auth;
                localStorage.setItem('auth', this.auth);
            } else {
                this.auth = localStorage.getItem('auth') || '';
            }
            Axios.get(`https://api.grosses-meer.surf/api/auth?token=${this.auth}`)
                .catch((response) => {
                    this.$router.push('/home');
                });
        }
    }
</script>
