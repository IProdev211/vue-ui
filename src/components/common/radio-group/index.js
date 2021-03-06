module.exports = {
    template: require('./template.html'),
    props: {
        checkedValue: {
            required: true
        }
    },
    ready: function () {
        var vm = this;
        vm.$broadcast('checked-value-changed', vm.checkedValue);
    },
    events: {
        'radio-button-clicked': function (val) {
            var vm = this;
            vm.checkedValue = val;
        }
    },
    watch: {
        checkedValue: function (val, oldVal) {
            var vm = this;
            vm.$broadcast('checked-value-changed', vm.checkedValue);
        }
    }
};