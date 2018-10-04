<template>
    <div class="h-12 xl:h-24 fixed w-full flex justify-center items-center shadow-md bg-white whitespace-no-wrap z-20 text-grey-dark font-sans font-thin">

        <div v-if="showdrawer" class="min-w-screen fixed pin z-30 flex" @click="showDrawer(false)">
            <div class="w-64 min-h-screen bg-grey-lighter shadow-lg flex flex-col" :class="animation">
                <div class="h-32 mb-4">
                    <img class="absolute h-32 w-64 opacity-75" src="../assets/drawer.jpg">
                    <div class="absolute h-32 w-64 opacity-75 bg-green-gradient"></div>
                    <div class="absolute">
                        <img class="h-12 mx-4 mt-6 mb-4" src="../assets/logos/logo_white.png">
                        <p class="pl-4 text-xs text-grey-light">
                            Surf- und Segelschule Grosses Meer
                        </p>
                    </div>
                </div>

                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'home' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/home.png">
                    <router-link to="home"
                                 class="flex-grow pl-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Startseite
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'surfing' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/windsurfing.png">
                    <router-link to="surfing"
                                 class="flex-grow pl-4 py-2 text-grey-darkest no-underline  text-lg sm:text-lg">
                        Windsurfen
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'sup' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/sup.png">
                    <router-link to="sup" class="flex-grow pl-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Stand Up Paddling
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'sailing' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/sail.png">
                    <router-link to="sailing"
                                 class="flex-grow pl-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Segeln
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'weather' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/partly-cloudy-day.png">
                    <router-link to="weather"
                                 class="flex-grow pl-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Wetter
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'contact' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/user.png">
                    <router-link to="contact"
                                 class="flex-grow pl-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Kontakt & Anfahrt
                    </router-link>
                </div>
                <div class="flex items-center" :class="{ 'bg-grey-light': activeTab === 'hochschulsport' }">
                    <img class="pl-4 pr-2 h-6" src="https://png.icons8.com/ios/40/444444/graduation-cap.png">
                    <router-link to="hochschulsport"
                                 class="flex-grow px-4 py-2 text-grey-darkest no-underline text-lg sm:text-lg">
                        Hochschulsport
                    </router-link>
                </div>

                <div class="absolute pin-b w-64">
                    <p class="px-4 py-2 text-grey-darkest text-sm">Folge uns auf Social Media!</p>
                    <div class="px-4 flex">
                        <a class="pr-4" href="https://www.instagram.com/surfschule_grosses_meer/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                                 viewBox="0 0 50 50"
                                 style="fill:#de751f;">
                                <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                                      d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                                      font-weight="400" font-family="sans-serif" white-space="normal"
                                      overflow="visible"></path>
                            </svg>
                        </a>
                        <a class="pr-4"
                           href="https://www.facebook.com/Surf-Und-Segelschule-Gro%C3%9Fes-Meer-1745123418870012/"
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                                 viewBox="0 0 50 50"
                                 style="fill:#1c3d5a;">
                                <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                                      d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"
                                      font-weight="400" font-family="sans-serif" white-space="normal"
                                      overflow="visible"></path>
                            </svg>
                        </a>
                    </div>
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

        <!--<div class="pr-8">-->
        <!--<div class="sm:hidden">-->
        <!--xs-->
        <!--</div>-->
        <!--<div class="hidden sm:block md:hidden">-->
        <!--sm-->
        <!--</div>-->
        <!--<div class="hidden md:block xl:hidden">-->
        <!--md-->
        <!--</div>-->

        <!--<div class="hidden xl:block">-->
        <!--xl-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<style>
    .bg-green-gradient {
        background: linear-gradient(to bottom right, #5b7e3b, #6c9243);
    }
</style>

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
