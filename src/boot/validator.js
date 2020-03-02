export default ({ Vue }) => {
  Vue.prototype.$validations = {
    required: (val, message = 'Campo obrigatório.') => (val && typeof val === 'string'
      ? val.length
      : val && Object.keys(val).length
    ) || message,
    email: (val, message = 'Campo precisa ser um e-mail') => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val) || message,
  };
};
