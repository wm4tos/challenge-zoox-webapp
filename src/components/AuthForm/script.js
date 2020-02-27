import FormMixin from 'mixins/form';

export default {
  name: 'AuthForm',
  data() {
    return {
      visible: false,
      hovering: false,
    };
  },
  mixins: [FormMixin],
  props: {
    value: {
      type: Object,
      required: true,
      validator: (val) => {
        const keysFromVal = Object.keys(val);
        const keysToValidate = ['email', 'password'];

        return keysFromVal.length
          && keysFromVal.length === keysToValidate.length
          && keysToValidate.every((key) => keysFromVal.includes(key));
      },
    },
    formAttrs: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  computed: {
    visibleIcon() {
      if (this.hovering) return this.visible ? 'visibility_off' : 'visibility';

      return !this.visible ? 'visibility_off' : 'visibility';
    },
  },
};
