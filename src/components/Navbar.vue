<template>
    <div ref="nav" class="h-12 xl:h-24 flex justify-center items-center bg-white whitespace-no-wrap z-20 text-grey-dark uppercase font-sans font-thin">

        <div v-if="showdrawer" class="min-w-screen min-h-screen fixed pin z-30 flex" @click="showdrawer = false">
            <div ref="drawer" class="min-h-screen bg-grey-darkest shadow-md w-menu-anim">
                <div class=" h-24 mb-4">
                    <img class="p-2" align="right" src="https://png.icons8.com/ios/16/ffffff/delete-sign.png" @click="showdrawer = false">
                    <img src="../assets/logos/logo_white.png" class="h-12 m-4">
                </div>

                <div class="flex items-center">
                    <router-link to="home" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'home' }">
                        Startseite
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="surfing" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'surfing' }">
                        Windsurfen
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="sup" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'sup' }">
                        Stand Up Paddling
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="sailing" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'sailing' }">
                        Segeln
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="weather" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'weather' }">
                        Wetter
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="contact" class="flex-grow pl-4 py-2 text-white no-underline"
                                 :class="{ 'font-bold': activeTab === 'contact' }">
                        Kontakt & Anfahrt
                    </router-link>
                    <!--<img class="pr-4" src="https://png.icons8.com/ios/24/ffffff/sort-down.png">-->
                </div>
                <div class="mx-4 border-b border-grey-dark"></div>
                <div class="flex items-center">
                    <router-link to="impressum" class="flex-grow px-4 py-2 text-white no-underline">
                        Impressum
                    </router-link>
                </div>
            </div>
            <div class="bg-black bg-fadeout-anim flex-grow"></div>
        </div>

        <div class="xl:hidden fixed pin-l pl-4">
            <button @click="showdrawer = true">
                <img src="https://png.icons8.com/windows/32/000000/menu.png">
            </button>
        </div>

        <div class="invisible xl:visible w-1/3 flex justify-end pt-4">
            <router-link to="home" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                :class="{ 'text-black border-green-dark': activeTab === 'home', 'text-grey-dark': activeTab !== 'home' }">
                Startseite
            </router-link>
            <router-link to="surfing" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-black border-green-dark': activeTab === 'surfing', 'text-grey-dark': activeTab !== 'surfing' }">
                Windsurfen
            </router-link>
            <router-link to="sup" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-black border-green-dark': activeTab === 'sup', 'text-grey-dark': activeTab !== 'sup' }">
                Stand Up Paddling
            </router-link>
        </div>
        <router-link to="/" class="flex-no-shrink">
            <img src="../assets/logos/logo.png" class="h-10 xl:h-16 px-6 my-auto">
        </router-link>
        <div class="invisible xl:visible w-1/3 flex justify-start pt-4">
            <router-link to="sailing" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-black border-green-dark': activeTab === 'sailing', 'text-grey-dark': activeTab !== 'sailing' }">
                Segeln
            </router-link>
            <router-link to="weather" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-black border-green-dark': activeTab === 'weather', 'text-grey-dark': activeTab !== 'weather' }">
                Wetter
            </router-link>
            <router-link to="contact" class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-black border-green-dark': activeTab === 'contact', 'text-grey-dark': activeTab !== 'contact' }">
                Kontakt & Anfahrt
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Navbar"
    })
    export default class Navbar extends Vue {

        private showdrawer = false;
        private activeTab: any;

        private async created() {
            this.activeTab = this.$router.currentRoute.name;
            this.$router.beforeResolve((to, from, next) => {
                this.activeTab = to.name;
                this.$nextTick(() => {
                    this.$forceUpdate()
                });
                next();
            });
        }
     }
</script>

<style>
    @keyframes anim-menu {
        from { margin-left: -70%; }
        to { margin-left: 0; }
    }

    @keyframes anim-fadeout {
        from { opacity: 0; }
        to { opacity: 0.4; }
    }

    .bg-fadeout-anim {
        opacity: 0.4;
        animation-name: anim-fadeout;
        animation-duration: 0.2s;
    }

    .w-menu-anim {
        margin-left: 0;
        width: 70%;
        animation-name: anim-menu;
        animation-duration: 0.2s;
    }
</style>