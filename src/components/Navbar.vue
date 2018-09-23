<template>
    <div class="h-12 xl:h-24 flex justify-center items-center bg-white whitespace-no-wrap z-20 text-grey-dark uppercase font-sans font-thin">

        <div v-if="showdrawer" class="min-w-screen min-h-screen fixed pin z-30 flex" @click="showDrawer(false)">
            <div class="w-64 min-h-screen bg-grey-darkest shadow-md" :class="animation">
                <div class=" h-24 mb-4">
                    <img src="../assets/logos/logo_white.png" class="h-12 m-4">
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="home" :class="{ 'bg-grey-darker': activeTab === 'home' }">
                        Startseite
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline  text-base sm:text-lg"
                                 to="surfing" :class="{ 'bg-grey-darker': activeTab === 'surfing' }">
                        Windsurfen
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="sup" :class="{ 'bg-grey-darker': activeTab === 'sup' }">
                        Stand Up Paddling
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="sailing" :class="{ 'bg-grey-darker': activeTab === 'sailing' }">
                        Segeln
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="weather" :class="{ 'bg-grey-darker': activeTab === 'weather' }">
                        Wetter
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow pl-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="contact" :class="{ 'bg-grey-darker': activeTab === 'contact' }">
                        Kontakt & Anfahrt
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow px-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="impressum" :class="{ 'bg-grey-darker': activeTab === 'impressum' }">
                        Impressum
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link class="flex-grow px-4 py-2 text-white no-underline text-base sm:text-lg"
                                 to="hochschulsport" :class="{ 'bg-grey-darker': activeTab === 'hochschulsport' }">
                        Hochschulsport
                    </router-link>
                </div>
            </div>
            <div class="bg-black anim-fadeout-background flex-grow"></div>
        </div>

        <div class="xl:hidden fixed pin-l pl-4">
            <button class="outline-none" @click="showDrawer(true)">
                <img src="https://png.icons8.com/windows/32/000000/menu.png">
            </button>
        </div>

        <div class="invisible xl:visible w-1/3 flex justify-end pt-4">
            <router-link to="home"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'home', 'text-grey-dark': activeTab !== 'home' }">
                Startseite
            </router-link>
            <router-link to="surfing"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'surfing', 'text-grey-dark': activeTab !== 'surfing' }">
                Windsurfen
            </router-link>
            <router-link to="sup"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'sup', 'text-grey-dark': activeTab !== 'sup' }">
                Stand Up Paddling
            </router-link>
        </div>
        <router-link to="/" class="flex-no-shrink">
            <img src="../assets/logos/logo.png" class="h-10 xl:h-16 px-6 my-auto">
        </router-link>
        <div class="invisible xl:visible w-1/3 flex justify-start pt-4">
            <router-link to="sailing"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'sailing', 'text-grey-dark': activeTab !== 'sailing' }">
                Segeln
            </router-link>
            <router-link to="weather"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'weather', 'text-grey-dark': activeTab !== 'weather' }">
                Wetter
            </router-link>
            <router-link to="contact"
                         class="px-3 py-2 no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                         :class="{ 'text-black border-green-dark': activeTab === 'contact', 'text-grey-dark': activeTab !== 'contact' }">
                Kontakt & Anfahrt
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        name: "Navbar"
    })
    export default class Navbar extends Vue {

        private animation = '';
        private animationComplete = true;
        private showdrawer = false;
        private activeTab: any;

        private closeOnScroll() {
            this.showDrawer(false);
        }

        private showDrawer(show: boolean) {
            if (this.animation === '') {
                if (show && !this.showdrawer) {
                    this.showdrawer = true;
                    this.animation = 'anim-open-menu';
                    setTimeout(() => {
                        this.animation = '';
                    }, 200);
                } else if (!show && this.showdrawer) {
                    this.animation = 'anim-close-menu';
                    setTimeout(() => {
                        this.animation = '';
                        this.showdrawer = false;
                    }, 200);
                }
            }
        }

        private async created() {
            this.activeTab = this.$router.currentRoute.name;
            this.$router.beforeResolve((to, from, next) => {
                this.activeTab = to.name;
                this.$nextTick(() => {
                    this.$forceUpdate();
                });
                next();
            });
            window.addEventListener('scroll', this.closeOnScroll);
        }
    }
</script>

<style>
    @keyframes anim-menu {
        from {
            margin-left: -16rem;
        }
        to {
            margin-left: 0;
        }
    }

    @keyframes anim-fadeout {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.4;
        }
    }

    .anim-fadeout-background {
        opacity: 0.4;
        animation-name: anim-fadeout;
        animation-duration: 0.2s;
    }

    .anim-open-menu {
        margin-left: 0;
        animation-name: anim-menu;
        animation-timing-function: linear;
        animation-duration: 0.2s;
    }

    .anim-close-menu {
        margin-left: -16rem;
        animation-name: anim-menu;
        animation-timing-function: linear;
        animation-duration: 0.2s;
        animation-direction: reverse;
    }

</style>
