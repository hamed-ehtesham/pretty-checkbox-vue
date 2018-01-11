<script>
    let prettyInput = require('./PrettyInput');

    let prettyCheckbox = {
        name: "pretty-checkbox",

        input_type: 'checkbox',

        model: prettyInput.model,
        props: prettyInput.props,
        data: prettyInput.data,
        computed: prettyInput.computed,
        watch: prettyInput.watch,
        mounted: prettyInput.mounted,
        methods: prettyInput.methods,

        render: prettyInput.render,
    };

    export default prettyCheckbox;
</script>