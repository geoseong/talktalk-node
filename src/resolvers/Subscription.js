const Subscription = {
  user: {
    subscribe: async(parent, args, context, info) => {
      console.log('[subscription] args', args);
      console.log('[subscription] context', context);
      return context.prisma.subscription.user({});
      // return context.prisma.subscription.user({
      //   where: {
      //     mutation_in: ['CREATED', 'UPDATED'],
      //   },
      // });
      // return context.prisma.subscription.user({
      //   mutation_in: ['CREATED'],
      // });
      /* Caveat */
      //   "errors": [
      //     {
      //       "message": "Cannot read property 'get' of undefined",
      //       "locations": [
      //         {
      //           "line": 2,
      //           "column": 3
      //         }
      //       ],
      //       "path": [
      //         "user"
      //       ]
      //     }
      //   ],
      //   "data": {
      //     "user": null
      //   }
      // }
    },
    // resolve: (payload) => {
    //   console.log('[subscription/resolve]payload', payload);
    // {
    /* payload must be same structure as return scheme of mutation and return scheme of subscription in client app query */
    //   return {
    //     mutation: ['CREATED'],
    //     node: payload,
    //   };
    //   // return {
    //   //   node: payload,
    //   // };
    // },
  },
};

export default Subscription;
