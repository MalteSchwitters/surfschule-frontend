<template>
    <div class="h-10 w-full border-2 rounded border-grey shadow-inner" :class="{ 'bg-red-lightest': !valid }">
        <input class="pl-2 my-auto h-full w-full outline-none bg-transparent text-grey-darkest" ref="input"
               v-bind:value="value" v-on:input="$emit('input', $event.target.value)" v-bind:placeholder="placeholder"
               @keydown.enter="save()" @keydown.esc="cancel()" :pattern="pattern" :oninvalid="updateValidity()"
               :required="required"/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        name: "InputText",
    })
    export default class InputText extends Vue {

        @Prop({default: ''})
        private placeholder!: string;

        @Prop({default: ''})
        private value!: string;

        @Prop({default: '.*'})
        private pattern!: string;

        @Prop({default: false})
        private required!: boolean;

        private originalValue = '';
        private valid = true;

        private created() {
            // this.valid = !this.required || this.value !== '';
        }

        private updateValidity() {
            const input = <HTMLInputElement>this.$refs.input;
            if (input != null) {
                this.valid = input.validity.valid;
            }
        }

        public isValid(): boolean {
            return this.valid;
        }
    }
</script>
