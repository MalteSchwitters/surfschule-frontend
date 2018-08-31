<template>
    <div class="bg-grey-dark flex">
        <div class="flex-grow">
            Unser Angebot
        </div>
        <div class="flex-grow">
            Kontakt
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Footer"
    })
    export default class Footer extends Vue {

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
