<p align="center">
<a href="https://hamed-ehtesham.github.io/pretty-checkbox-vue/">
    <img src="https://raw.githubusercontent.com/hamed-ehtesham/pretty-checkbox-vue/master/banner.png" width="300px">
</a>

<br>
Quickly integrate <a href="https://lokesh-coder.github.io/pretty-checkbox/">pretty checkbox</a> Components with <a href="https://vuejs.org">Vue.js</a>
<br>
<br>

<a href="https://lokesh-coder.github.io/pretty-checkbox/">
    <img alt="" src="https://img.shields.io/badge/%20pretty--checkbox-3.x-green.svg?style=flat-square&colorA=8033b0&colorB=75b7dd">
</a>
<a href="https://vuejs.org">
    <img alt="" src="https://img.shields.io/badge/vue.js-2.x-green.svg?style=flat-square&colorA=35495e&colorB=41b883">
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

Vue.component('p-checkbox', PrettyCheckbox);
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<p-checkbox name="remember" class="p-default" button-variant="success" v-model="remember">remember</p-checkbox>
```

If you have discovered a 🐜 or have a feature suggestion, feel free to create an [issue](https://github.com/hamed-ehtesham/pretty-checkbox-vue/issues) on Github.

# License
Released under The MIT [License](https://github.com/hamed-ehtesham/pretty-checkbox-vue/blob/master/LICENSE). Copyright (c) hamed-ehtesham.