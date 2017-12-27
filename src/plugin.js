import PrettyCheckbox from './PrettyCheckbox.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('p-checkbox', PrettyCheckbox);
    }
};