import jwt from 'jsonwebtoken';

export default function authMiddleware(appSecret) {
  if (!appSecret) {
    throw new Error('The secret to encrypt JWT is must be provided');
  }

  return async(resolve, parent, args, context, info) => {
    let currentUser = null;
    // console.log('[Middleware] context.request', context.request);
    /* playground 실행 시 아무것도 안 하더라도 이 로직이 엄청나게 돌아감 */
    /* this logic executed continuously when user enter prisma playground.
      you can check it you input `console.log`. */
    const authHeader = context.request.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      currentUser = await context.prisma.query.user({
        where: {
          id: userId,
        },
      }, info);
    }

    const contextWithCurrentUser = {
      ...context,
      appSecret,
      currentUser,
    };

    try {
      const result = await resolve(parent, args, contextWithCurrentUser, info);
      return result;
    } catch {
      // Catch NPE on context.currentUser
      throw new Error('Not authorized');
    }
  };
}
