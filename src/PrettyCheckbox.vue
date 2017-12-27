<template>
    <div class="pretty">
        <input type="checkbox" :name="name" :checked="checked" :disabled="disabled" :required="required" v-model="val"/>
        <div :class="classes">
            <label>
                <slot></slot>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pretty-checkbox",

        props: {
            value: {},
            checked: Boolean,
            buttonVariant: String,
            name: String,
            disabled: Boolean,
            required: {
                type: Boolean,
                default: false,
            },
            state: {},
            plain: {
                type: Boolean,
                default: false,
            },
            indeterminate: Boolean,
        },

        data() {
            return {
                val: null,
            }
        },

        computed: {
            classes() {
                let classes  = {state: true,};
                classes[`p-${this.buttonVariant}`] = true;

                return classes;
            }
        },

        watch: {
            val(v) {
                this.$emit('input', v);
            },

            value(v) {
                this.val = v;
            }
        },
    }
</script>

<style scoped>

</style>