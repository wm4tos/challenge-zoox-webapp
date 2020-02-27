import FormMixin from 'mixins/form';

export default {
  name: 'AuthForm',
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
};
