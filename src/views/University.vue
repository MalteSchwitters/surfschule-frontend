<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/start/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey">
            <a href="#hochschulsport" class="text-grey-darker hover:text-blue uppercase no-underline"># Hochschulsport</a>
            <a href="#faq" class="text-grey-darker hover:text-blue uppercase no-underline"># FAQ</a>
            <a href="#termine" class="text-grey-darker hover:text-blue uppercase no-underline"># Termine</a>
            <a href="#anmeldung" class="text-grey-darker hover:text-blue uppercase no-underline"># Anmeldung</a>
        </nav>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="hochschulsport" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Hochschulsport</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Du bist grade mitten in deinem Studium und brauchst mal eine Auszeit vom Lernen? Du wolltest schon immer
                    mal eine der schönsten Trendsportarten der Welt ausprobieren? Oder in einer kleinen Gruppe die Kanäle
                    rund ums Große Meer mit dem SUP erkunden? Dann bist du hier genau richtig! Denn in Kooperation mit dem
                    Hochschulsport der HS Emden/Leer bieten wir einige ermäßigte Angebote exklusiv für Studierende an.
                </p>
                <p class="pb-6 text-base xl:text-lg">
                    Gegen Vorlage deines Studierendenausweises kannst du dir bei uns vergünstigt Material zum Windsurfen und
                    Stand Up Paddlen leihen. Außerdem gibt es zu festgelegten Terminen spezielle Schnupperkurse über den
                    Hochschulsport. Hier eine Liste aller Vergünstigungen:
                </p>

                <table class="pb-6 w-full">
                    <tr>
                        <th class="w-1/2 whitespace-no-wrap uppercase text-xs xl:text-sm">Kurs/Material</th>
                        <th class="w-1/6 whitespace-no-wrap uppercase text-xs xl:text-sm">Dauer</th>
                        <th class="w-1/6 whitespace-no-wrap uppercase text-xs xl:text-sm">Normalpreis</th>
                        <th class="w-1/6 whitespace-no-wrap uppercase text-xs xl:text-sm">Preis</th>
                    </tr>
                    <tr v-for="s in studentoffers" :key="s.course">
                        <td class="text-base xl:text-lg">{{ s.course }}</td>
                        <td class="text-base xl:text-lg whitespace-no-wrap pr-2">{{ s.duration }}</td>
                        <td class="text-base xl:text-2xl whitespace-no-wrap"><strike>{{ s.normalprice }}</strike></td>
                        <td class="text-base xl:text-2xl whitespace-no-wrap">{{ s.price }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="faq" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">FAQ</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>

                <h2 class="py-2">Welche Sportarten werden angeboten?</h2>
                <p class="pb-6 text-base xl:text-lg">
                    Wir bieten sowohl Windsurfkurse, als auch SUP Touren zu ermäßigten Preisen an. Bei den Surfkursen
                    handelt es sich um 3 stündige Schnupperkurse für <b>20€</b>, die optional zum ebenfalls ermäßigten
                    Einsteigerkurs ausgebaut werden können. Dieser dauert 14 Stunden und kostet <b>140€</b>. Die SUP Touren
                    dauern etwa 2 Stunden und kosten <b>10€</b>.
                </p>

                <h2 class="py-2">Wo finden die Kurse statt?</h2>
                <p class="pb-6 text-base xl:text-lg">
                    Die Surfkurse und die SUP Touren finden am <b>Grossen Meer</b> statt. Treffen ist dabei jeweils an der
                    Surfschule vor Ort. <router-link class="no-underline hover:underline" to="/Contact#anfahrt">Hier</router-link> findest du Informationen zur
                    Anfahrt.
                </p>

                <h2 class="py-2">Was muss ich zum Surfen/SUP mitnehmen?</h2>
                <p class="pb-6 text-base xl:text-lg">
                    Das gesammte Material vom Board bis zum Neoprenanzug wird von der Surfschule gestellt. Mitnehmen
                    brauchst du also nur, was du sonst auch im Schwimmbad dabei hast.
                </p>

                <h2 class="py-2">Kann ich auch außerhalb der Kurse vergünstigt Material leihen?</h2>
                <p class="pb-6 text-base xl:text-lg">
                    Natürlich kannst du dir auch ohne einen Kurs Material bei uns leihen. Gegen Vorlage deines
                    Studierendenausweises kannst du dir Windsurfmaterial für <b>7,50€</b> pro Stunde und ein SUP Board für
                    <b>5,00€</b> pro Stunde leihen.
                </p>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="termine" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Termine</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Die Termine für die Surf und SUP Kurse im Wintersemester 18/19 werden in Kürze bekannt gegeben.
                    <!--Hier findest du eine Auflistung aller angebotenen Termine. Für alle Kurse gibt es eine-->
                    <!--Mindestteilnehmerzahl von 3 Personen. Bitte achte dazu in den Tagen vor dem Kurs auf deine eMails, da-->
                    <!--wir dich so über eventuelle Ausfälle oder wetterbedingte Terminverschiebungen informieren.-->
                </p>
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="anmeldung" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Anmeldung</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Die Anmeldung wird freigeschaltet, sobald die Kurse verfübar sind.
                    <!--Solltest du zum ausgewählten Termin doch keine Zeit haben, oder aus anderen Gründen nicht teilnehmen-->
                    <!--können oder wollen, sag uns bitte kurz Bescheid, damit wir den Kurs entsprechend planen können. Eine-->
                    <!--kurze email an info@grosses-meer.surf ohne Angabe von Gründen genügt.-->
                </p>
                <!--<form>-->
                    <!--<div class="table">-->
                        <!--<div class="table-row">-->
                            <!--<p class="pr-8 table-cell">Name</p>-->
                            <!--<input class="mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner" v-model="name"/>-->
                        <!--</div>-->
                        <!--<div class="table-row">-->
                            <!--<p class="pr-8 table-cell">E-Mail</p>-->
                            <!--<input class="mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner" v-model="name"/>-->
                        <!--</div>-->
                        <!--<div class="table-row">-->
                            <!--<p class="pr-8 table-cell">Kurs</p>-->
                            <!--<input class="mb-6 table-cell p-2 border-2 rounded outline-none shadow-inner" v-model="name"/>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">-->
                        <!--Anmelden-->
                    <!--</button>-->
                <!--</form>-->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class University extends Vue {
        private name = '';
        private email = '';
        private course = '';

        private studentoffers = [
            {
                course: 'Windsurf Schnupperkurs (feste Termine)',
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
                course: 'SUP Tour / Einsteigerkurs (feste Termine)',
                duration: '2 Std.',
                normalprice: '40,00€',
                price: '10,00€',
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
    }
</script>
