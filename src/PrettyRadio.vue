<script>
    let prettyInput = require('./PrettyInput');

    let prettyRadio = {
        name: "pretty-radio",

        input_type: 'radio',

        model: prettyInput.model,
        props: prettyInput.props,
        data: prettyInput.data,
        computed: prettyInput.computed,
        watch: prettyInput.watch,
        mounted: prettyInput.mounted,
        methods: prettyInput.methods,

        render: prettyInput.render,
    };

    export default prettyRadio;
</script>