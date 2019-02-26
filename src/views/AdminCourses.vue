<template>
    <div>
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/surfing/header.jpg"/>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="courseadd" class="anchor"></a>
                <h1 class="pt-8">Kurs hinzufügen</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <form class="pt-8 w-full xl:w-1/2">
                    <div class="sm:table w-full">
                        <div class="sm:table-row">
                            <p class="pr-8 table-cell">Name</p>
                            <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                   placeholder="Schnuppersurfen"
                                   v-model="newcourse.name"/>
                        </div>
                        <div class="sm:table-row">
                            <p class="pr-8 table-cell">Datum</p>
                            <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                   placeholder="2018-09-11" v-model="newcourse.date"/>
                        </div>
                        <div class="sm:table-row">
                            <p class="pr-8 table-cell">von</p>
                            <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                   placeholder="12:00" v-model="newcourse.from"/>
                        </div>
                        <div class="sm:table-row">
                            <p class="pr-8 table-cell">bis</p>
                            <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                   placeholder="15:00" v-model="newcourse.to"/>
                        </div>
                        <div class="sm:table-row">
                            <p class="pr-8 table-cell">bis</p>
                            <input class="w-full mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner"
                                   placeholder="20€" v-model="newcourse.price"/>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                @click="send()">
                            Erstellen
                        </button>
                    </div>
                </form>
            </div>
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="courselist" class="anchor"></a>
                <h1 class="pt-8">Kurse verwalten</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <table class="pb-6 w-full">
                    <tr>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm hidden sm:block">Kursname</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Datum</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Zeit</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Preis</th>
                    </tr>
                    <tr v-for="c in courses" :key="c.id">
                        <td class="text-sm sm:text-base xl:text-lg hidden sm:block">{{ c.name}}</td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap">{{ formatDate(c.start) }}
                        </td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap pr-2">
                            {{ formatTime(c.start) }} - {{ formatTime(c.end) }} Uhr
                        </td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap">{{ c.price }}</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Moment from 'moment';
    import Axios from 'axios';

    @Component({components: {}})
    export default class AdminCourses extends Vue {

        private auth = '';
        private sending = false;
        private success = false;
        private newcourse = {
            name: '',
            date: '',
            from: '',
            to: '',
            price: '',
        };
        private courses = [];

        private reset() {
            this.success = false;
        }

        private formatDate(date: any): string {
            return Moment(date).format('dd, DD.MM.YYYY');
        }

        private formatTime(date: any): string {
            return Moment(date).format('HH:mm');
        }

        private send() {
            this.sending = true;

            const tstart = Moment(`${this.newcourse.date} ${this.newcourse.from}`, 'DD.MM.YYYY hh:mm').subtract(2, 'hours').format('YYYY-MM-DD::HH-mm');
            const tend = Moment(`${this.newcourse.date} ${this.newcourse.to}`, 'DD.MM.YYYY hh:mm').subtract(2, 'hours').format('YYYY-MM-DD::HH-mm');
            const pr = this.newcourse.price.replace('€', '').trim();

            Axios.post(`https://api.grosses-meer.surf/api/university?auth=${this.auth}&name=${this.newcourse.name}&tstart=${tstart}&tend=${tend}&price=${pr}`)
                .then(() => {
                    this.success = true;
                    this.sending = false;
                    this.refreshCourses();
                });
        }

        private refreshCourses() {
            Axios.get('https://api.grosses-meer.surf/api/university')
                .then((response) => {
                    this.courses = response.data;
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
            this.refreshCourses();
        }
    }
</script>
