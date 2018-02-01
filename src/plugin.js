let PrettyInput = require('./PrettyInput');
let PrettyCheckbox = require('./PrettyCheckbox');
let PrettyRadio = require('./PrettyRadio');

module.exports = {
    install: function (Vue, options) {
        Vue.component('p-input', PrettyInput);
        Vue.component('p-check', PrettyCheckbox);
        Vue.component('p-radio', PrettyRadio);
    }
};