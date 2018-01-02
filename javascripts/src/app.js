window.Vue = require('vue');

Vue.use(require('pretty-checkbox-vue'));
Vue.component('card', require('./Card'));

const app = new Vue({
    el: '#app',

    data: {
        ind: false,
        slider: 14,
        collapsed: false,
    },

    computed: {
        scale_test() {
            return {
                'font-size': `${this.slider}px`
            };
        }
    },

    methods: {
        show_all() {
            this.collapsed = !this.collapsed;
        },

        set_ind() {
            this.ind = false;

            setTimeout(() => {
                this.ind = true;
            }, 100);
        },
    }
});