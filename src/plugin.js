import PrettyInput from './PrettyInput';
import PrettyCheckbox from './PrettyCheckbox';
import PrettyRadio from './PrettyRadio';

module.exports = {
    install: function (Vue, options) {
        Vue.component('p-input', PrettyInput);
        Vue.component('p-check', PrettyCheckbox);
        Vue.component('p-radio', PrettyRadio);
    }
};