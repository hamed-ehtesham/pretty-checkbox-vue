<p align="center">
<a href="https://hamed-ehtesham.github.io/pretty-checkbox-vue/">
    <img src="https://raw.githubusercontent.com/hamed-ehtesham/pretty-checkbox-vue/master/banner.png" width="300px">
</a>

<br>
Quickly integrate <a href="https://lokesh-coder.github.io/pretty-checkbox/">pretty checkbox</a> Components (checkbox, switch, radio button) with <a href="https://vuejs.org">Vue.js</a>
<br>
<br>

<a href="https://lokesh-coder.github.io/pretty-checkbox/">
    <img alt="" src="https://img.shields.io/badge/%20pretty--checkbox-3.x-green.svg?style=flat-square&colorA=8033b0&colorB=75b7dd">
</a>
<a href="https://vuejs.org">
    <img alt="" src="https://img.shields.io/badge/vue.js-^2.2.0-green.svg?style=flat-square&colorA=35495e&colorB=41b883">
</a>

<br>

<a href="https://github.com/hamed-ehtesham/pretty-checkbox-vue/releases">
    <img src="https://img.shields.io/github/release/hamed-ehtesham/pretty-checkbox-vue.svg?style=flat-square&colorB=75b7dd" alt="Github Release">
</a>
<a href="https://github.com/hamed-ehtesham/pretty-checkbox-vue/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/pretty-checkbox.svg?style=flat-square&colorB=41b883" alt="Licence">
</a>
<a href="https://www.npmjs.com/package/pretty-checkbox-vue">
    <img alt="" src="https://img.shields.io/npm/dt/pretty-checkbox-vue.svg?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/pretty-checkbox-vue">
    <img alt="" src="https://img.shields.io/npm/dm/pretty-checkbox-vue.svg?style=flat-square">
</a>

</p>

<div class="highlight highlight-source-shell">
<pre>
<div align="center"><strong>Demo and documentation</strong></div>
<div align="center"><a align="center" href="https://hamed-ehtesham.github.io/pretty-checkbox-vue/">https://hamed-ehtesham.github.io/pretty-checkbox-vue/</a></div>
</pre>
</div>

## Installation

```js
npm i --save-dev pretty-checkbox-vue
```

### Browser

Include the script file, then install the component with `Vue.use(PrettyCheckbox);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/pretty-checkbox-vue/dist/pretty-checkbox-vue.min.js"></script>
<script type="text/javascript">
  Vue.use(PrettyCheckbox);
</script>
```

### Module

```js
import PrettyCheckbox from 'pretty-checkbox-vue';

Vue.use(PrettyCheckbox);
```

Or

```js
import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<p-check name="check" color="success" v-model="check">check</p-check>
<p-radio name="radio" color="info" v-model="radio">radio</p-radio>

<!-- Or it can be used just like input -->

<p-input type="checkbox" name="check" color="success" v-model="check">check</p-input>
<p-input type="radio" name="radio" color="info" v-model="radio">radio</p-input>
```


### Properties
Property | Type | Default Value
------------ | ------------- | -------------
type | String | checkbox (checkbox & input) or radio (radio) 
name | String | 
value | Any | 
class | String | `p-default` (checkbox & input) or `p-default p-round` (radio) 
true-value | Boolean or String | true
false-value | Boolean or String | false
checked | Boolean | false
disabled | Boolean | false
required | Boolean | false
indeterminate | Boolean | false
color | String | 
off-color | String | 
hover-color | String | 
indeterminate-color | String | 
toggle | Boolean | false
hover | Boolean | false
focus | Boolean | false

### Slots
Name | Purpose
------------ | -------------
default (no name) | include **label** in _**default**_ mode or for **"on"** state in _**toggle**_ mode
extra | include **icon** or **svg** or **image** in _**default**_ mode or for **"on"** state in _**toggle**_ mode
off-label | include **label** for **"off"** state in _**toggle**_ mode
off-extra | include **icon** or **svg** or **image** for **"off"** state in _**toggle**_ mode
hover-label | include **label** in _**hover**_ state
hover-extra | include **icon** or **svg** or **image** in _**hover**_ state
indeterminate-label | include **label** in _**indeterminate**_ state
indeterminate-extra | include **icon** or **svg** or **image** in _**indeterminate**_ state

If you have discovered a 🐜 or have a feature suggestion, feel free to create an [issue](https://github.com/hamed-ehtesham/pretty-checkbox-vue/issues) on Github.

# License
Released under The MIT [License](https://github.com/hamed-ehtesham/pretty-checkbox-vue/blob/master/LICENSE). Copyright (c) hamed-ehtesham.