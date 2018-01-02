<template>
    <div class="block card mb-3">
        <div class="card-header bg-transparent d-flex justify-content-between">
            <h6 class="mb-0">
                <slot name="name"></slot>
            </h6>
            <slot name="buttons"></slot>
            <div class="show-code" v-if="hidden" @click="toggle">show code <i class="mdi mdi-code-tags"></i></div>
            <div class="show-code" v-else @click="toggle">hide code <i class="mdi mdi-chevron-down"></i></div>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div :class="classes"><pre><slot name="footer"></slot></pre></div>
    </div>
</template>

<script>
    export default {
        name: "card",

        data() {
            return {
                hidden: true,
            }
        },

        computed: {
            classes() {
                return {
                    'card-footer': true,
                    'pt-0': true,
                    animated: true,
                    hide: this.hidden,
                    fadeIn: !this.hidden,
                };
            }
        },

        methods: {
            toggle() {
                this.hidden = !this.hidden;
            }
        }
    }
</script>

<style scoped>

</style>