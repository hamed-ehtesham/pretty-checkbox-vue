import PrettyInput from './PrettyInput.vue';
import PrettyCheckbox from './PrettyCheckbox.vue';
import PrettyRadio from './PrettyRadio.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('p-input', PrettyInput);
        Vue.component('p-check', PrettyCheckbox);
        Vue.component('p-radio', PrettyRadio);
    }
};