import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Token } from '../entities/Token';
import { TokenInput } from '../inputs/Token';
import { db } from '../middlewares/db';
import { User } from '../entities/User';

@Resolver(() => Token)
export class TokenResolver {
  @FieldResolver(() => User)
  async user(@Root() token: Token) {
    return await db.manager.findOneByOrFail(User, { id: token.userId });
  }

  @Query(() => Token, { nullable: true })
  async validateToken(@Arg('input') input: TokenInput) {
    return await db.manager.findOneBy(Token, { hash: input.hash });
  }
}
