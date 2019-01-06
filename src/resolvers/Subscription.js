const Subscription = {
  user: {
    subscribe: async(parent, args, context, info) => {
      return context.prisma.$subscribe
        .user({
          mutation_in: ['CREATED', 'UPDATED'],
        })
        .node();
    },
    resolve: (payload) => {
      console.log({ payload });
      /* payload must be same structure as return scheme of mutation and return scheme of subscription in client app query */
      return {
        node: payload,
      };
    },
  },
};

export default Subscription;
