export default {
  methods: {
    mapBadRequestMessage(messages) {
      const [message] = messages;
      const { constraints } = message;

      /* eslint-disable-next-line */
      return Object.entries(constraints).flatMap(([key, value]) => value);
    },
  },
};
