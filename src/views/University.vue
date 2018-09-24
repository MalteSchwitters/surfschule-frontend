<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/start/header.jpg"/>

        <!--<nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey">-->
        <!--<a href="#hochschulsport" class="text-grey-darker hover:text-blue uppercase no-underline"># Hochschulsport</a>-->
        <!--<a href="#faq" class="text-grey-darker hover:text-blue uppercase no-underline"># FAQ</a>-->
        <!--<a href="#termine" class="text-grey-darker hover:text-blue uppercase no-underline"># Termine</a>-->
        <!--<a href="#anmeldung" class="text-grey-darker hover:text-blue uppercase no-underline"># Anmeldung</a>-->
        <!--</nav>-->

        <div v-if="registerSuccess"
             class="pin fixed min-h-screen h-full w-full z-50 bg-black-transparent flex justify-center items-center">
            <div class="bg-white rounded shadow-lg p-8 md:px-16">
                <h1 class="pt-4 text-xl sm:text-3xl">Anmeldung erfolgreich!</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="max-w-xs sm:max-w-sm text-sm sm:text-base xl:text-lg">
                    Alles klar, {{ forename }}!
                </p>
                <p class="pb-12 max-w-xs sm:max-w-sm text-sm sm:text-base xl:text-lg">
                    Wir haben deine Anmeldung für den Kurs am <b>{{ formatDate(course.start) }}</b> bei uns
                    registriert.
                    Wir freuen uns, dich schon bald bei uns an der Surfschule zu sehen! Wenn du noch Fragen zu
                    den
                    Kursen
                    hast schreib uns gerne eine email an
                    <a class="text-sm sm:text-base xl:text-lg text-blue no-underline hover:underline"
                       href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>!
                </p>
                <div class="flex sm:justify-end">
                    <button class="w-full sm:w-auto bg-blue hover:bg-blue-dark text-white font-bold py-3 px-12 rounded"
                            @click="registering = false; registerSuccess = false;">
                        Schließen
                    </button>
                </div>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="hochschulsport" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Hochschulsport</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Du bist grade mitten in deinem Studium und brauchst mal eine Auszeit vom Lernen? Du wolltest schon
                    immer mal eine der schönsten Trendsportarten der Welt ausprobieren? Oder in einer kleinen Gruppe die
                    Kanäle rund ums Große Meer mit dem SUP erkunden? Dann bist du hier genau richtig! Denn in
                    Kooperation mit dem Hochschulsport der HS Emden/Leer bieten wir einige ermäßigte Angebote exklusiv
                    für Studierende an.
                </p>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Gegen Vorlage deines Studierendenausweises kannst du dir bei uns vergünstigt Material zum Windsurfen
                    und
                    Stand Up Paddlen leihen. Außerdem gibt es zu festgelegten Terminen spezielle Schnupperkurse über den
                    Hochschulsport. Hier eine Liste aller Vergünstigungen:
                </p>

                <table class="w-64 pb-6 w-full">
                    <tr>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Kurs/Material</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Dauer</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm hidden md:block">Normalpreis</th>
                        <th class="whitespace-no-wrap uppercase text-xs xl:text-sm">Preis</th>
                    </tr>
                    <tr v-for="s in studentoffers" :key="s.course">
                        <td class="text-sm sm:text-base xl:text-lg">{{ s.course }}</td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap pr-2">{{ s.duration }}</td>
                        <td class="text-sm sm:text-base xl:text-2xl whitespace-no-wrap hidden md:block">
                            <strike>{{ s.normalprice }}</strike>
                        </td>
                        <td class="text-sm sm:text-base xl:text-2xl whitespace-no-wrap">
                            <strike class="md:hidden">{{ s.normalprice }}</strike><br class="md:hidden"/>
                            {{ s.price }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="faq" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">FAQ</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>

                <h2 class="py-2 text-base sm:text-lg xl:text-xl">Welche Sportarten werden angeboten?</h2>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Ihr könnt bei uns sowohl Windsurfmaterial, als auch SUP Boards ausleihen. Zu einigen festgelegten
                    Terminen gibt es außerdem Windsurf Schnupperkurse über den Hochschulsport. Die Kurse dauern je <b>3
                    Stunden</b> und kosten <b>20€</b> pro Teilnehmer. Sollte der Wind nicht zum Surfen reichen wird
                    stattdessen eine SUP Tour durch die Kanäle gemacht. Nach Absprache könnt ihr auch einen kompletten
                    Windsurfgrundkurs mit VDWS Surfschein bei uns belegen. Dieser dauert <b>14 Stunden</b> und kostet
                    <b>140€</b>.
                </p>

                <h2 class="py-2 text-base sm:text-lg xl:text-xl">Wo finden die Kurse statt?</h2>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Alle Schnupperkurse finden am <b>Grossen Meer</b> statt. Treffen ist dabei jeweils an der Surfschule
                    vor Ort.
                    <router-link class="text-sm sm:text-base xl:text-lg no-underline hover:underline"
                                 to="/Contact#anfahrt">Hier
                    </router-link>
                    findest du Informationen zur Anfahrt.
                </p>

                <h2 class="py-2 text-base sm:text-lg xl:text-xl">Was muss ich zum Surfen / SUP mitnehmen?</h2>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Das gesammte Material vom Board bis zum Neoprenanzug wird von der Surfschule gestellt. Mitnehmen
                    brauchst du also nur, was du sonst auch im Schwimmbad dabei hast.
                </p>

                <h2 class="py-2 text-base sm:text-lg xl:text-xl">Kann ich auch außerhalb der Kurse vergünstigt Material
                    leihen?</h2>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Natürlich kannst du dir auch ohne einen Kurs Material bei uns leihen. Gegen Vorlage deines
                    Studierendenausweises kannst du dir Windsurfmaterial für <b>7,50€</b> pro Stunde und ein SUP Board
                    für <b>5,00€</b> pro Stunde leihen.
                </p>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="termine" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Termine</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p v-if="courses.length === 0" class="pb-6 text-base xl:text-lg">
                    Die Termine für die Surf und SUP Kurse im Wintersemester 18/19 werden in Kürze bekannt gegeben.
                </p>
                <div v-else>
                    <p class="pb-6 text-sm sm:text-base xl:text-lg">
                        Hier findest du eine Auflistung aller angebotenen Termine. Für alle Kurse gibt es eine
                        Mindestteilnehmerzahl von 3 Personen. Bitte achte in den Tagen vor dem Kurs auf deine E-Mails,
                        da wir dich so über eventuelle Ausfälle oder wetterbedingte Terminänderungen informieren.
                    </p>
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

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="anmeldung" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Anmeldung</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p v-if="courses.length === 0" class="pb-6 text-base xl:text-lg">
                    Die Anmeldung wird freigeschaltet, sobald die Kurse verfübar sind.
                </p>
                <div v-else class="flex flex-col">
                    <p class="pb-6 text-sm sm:text-base xl:text-lg">
                        Solltest du zum ausgewählten Termin doch keine Zeit haben, oder aus anderen Gründen nicht
                        teilnehmen können oder wollen, sag uns bitte kurz Bescheid, damit wir den Kurs entsprechend
                        planen können. Eine kurze email an info@grosses-meer.surf ohne Angabe von Gründen genügt.
                    </p>

                    <div class="justify-between mb-6">
                        <div class="sm:ml-8 sm:max-w-sm mt-4 sm:pl-4 sm:border-l-2 sm:border-grey-light mb-6">
                            <div class="flex mb-4 flex-col sm:flex-row">
                                <p class="w-32 my-1 flex-no-shrink text-base xl:text-lg">
                                    Vorname</p>
                                <input-text ref="inputForename" v-model="forename" :required="true" placeholder="Max"
                                            pattern="^[a-zA-Z\s,.'-\pL]+$"></input-text>
                            </div>
                            <div class="flex mb-4 flex-col sm:flex-row">
                                <p class="w-32 my-1 flex-no-shrink text-base xl:text-lg">
                                    Nachname</p>
                                <input-text ref="inputSurname" v-model="surname" :required="true"
                                            placeholder="Mustermann"
                                            pattern="^[a-zA-Z\s,.'-\pL]+$"></input-text>
                            </div>
                            <div class="flex mb-4 flex-col sm:flex-row">
                                <p class="w-32 my-1 flex-no-shrink text-base xl:text-lg">
                                    E-Mail</p>
                                <input-text ref="inputEmail" v-model="email" :required="true"
                                            pattern="^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})+$"
                                            placeholder="max.muster@muster.de"></input-text>
                            </div>
                            <div class="flex flex-col sm:flex-row">
                                <p class="w-32 my-1 flex-no-shrink text-base xl:text-lg">Kurs</p>
                                <select ref="selectCourse"
                                        class="w-full p-2 border-2 rounded outline-none bg-white shadow-inner" required
                                        v-model="course"
                                        v-bind:class="{ 'text-grey-dark': course === '' }">
                                    <option value="" disabled selected>- Bitte wähle einen Kurs -</option>
                                    <option class="text-black" v-for="c in courses" v-bind:key="c.start" :value="c">
                                        {{ formatDate(c.start) }}, {{ formatTime(c.start) }} Uhr
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center py-4">
                        <button v-if="isAllValid()" @click="register()"
                                class="w-full sm:w-auto bg-blue hover:bg-blue-dark text-white font-bold py-4 px-32 rounded">
                            Anmelden
                        </button>
                        <button v-else class="w-full sm:w-auto bg-grey-dark text-white font-bold py-4 px-32 rounded">
                            Anmelden
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Axios from 'axios';
    import Moment from 'moment';
    import InputText from '../components/InputText.vue';

    @Component({components: {InputText}})
    export default class University extends Vue {
        private registering = false;
        private registerSuccess = false;

        private forename = '';
        private surname = '';
        private email = '';
        private course: any = '';

        private courses: any[] = [];

        private studentoffers = [
            {
                course: 'Windsurf / SUP Schnupperkurs',
                duration: '3 Std.',
                normalprice: '55,00€',
                price: '20,00€',
            },
            {
                course: 'Windsurf Grundkurs',
                duration: '14 Std.',
                normalprice: '225,00€',
                price: '140,00€',
            },
            {
                course: 'Verleih: Windsurfboard mit Segel',
                duration: '1 Std.',
                normalprice: '15,00€',
                price: '7,50€',
            },
            {
                course: 'Verleih: SUP Board mit Paddel',
                duration: '1 Std.',
                normalprice: '12,50€',
                price: '5,00€',
            },
        ];

        private isAllValid(): boolean {
            return this.course !== '' &&
                (<InputText>this.$refs.inputForename).isValid() &&
                (<InputText>this.$refs.inputSurname).isValid() &&
                (<InputText>this.$refs.inputEmail).isValid();
        }

        private register() {
            Axios.post(`https://api.grosses-meer.surf/api/university/register?forename=${this.forename}&surname=${this.surname}&email=${this.email}&courseid=${this.course.id}`)
                .then(() => {
                    this.registerSuccess = true;
                    this.forename = '';
                    this.surname = '';
                    this.email = '';
                    this.course = '';
                });
        }

        private formatDate(date: any): string {
            return Moment(date).format('dd, DD.MM.YYYY');
        }

        private formatTime(date: any): string {
            return Moment(date).format('HH:mm');
        }

        private created() {
            Axios.get('https://api.grosses-meer.surf/api/university')
                .then((response) => {
                    this.courses = response.data;
                });
        }
    }
</script>
