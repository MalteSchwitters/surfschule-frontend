<template>
    <nav ref="nav" class="h-24 flex justify-center items-center bg-white whitespace-no-wrap z-20 text-grey-dark text-lg uppercase font-sans font-thin ">
        <div class="xl:hidden fixed pin-l pl-4">
            <button>
                <img src="https://png.icons8.com/windows/50/000000/menu.png">
            </button>
        </div>

        <div class="invisible xl:visible w-1/3 flex justify-end  pt-4">
            <router-link to="home" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                :class="{ 'text-grey-darkest border-green-dark': activeTab === 'home' }">
                Startseite
            </router-link>
            <router-link to="surfing" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': activeTab === 'surfing' }">
                Windsurfen
            </router-link>
            <router-link to="sup" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': activeTab === 'sup' }">
                Stand Up Paddling
            </router-link>
        </div>
        <router-link to="/" class="flex-no-shrink">
            <img src="../assets/logo.png" class="h-16 px-6 my-auto">
        </router-link>
        <div class="invisible xl:visible w-1/3 flex justify-start pt-4">
            <router-link to="sailing" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': activeTab === 'sailing' }">
                Segeln
            </router-link>
            <router-link to="weather" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': activeTab === 'weather' }">
                Wetter
            </router-link>
            <router-link to="contact" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': activeTab === 'contact' }">
                Kontakt & Anfahrt
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

        private activeTab: string;

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
