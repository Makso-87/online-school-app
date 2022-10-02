import { Arg, Authorized, Ctx, Mutation, Query } from "type-graphql";
import bcrypt from "bcrypt";
import { User } from "../entities/User";
import {
  CreateUserInput,
  UpdateUserInput,
  UserByTypeInput,
  UserDeleteInput,
  UserInput,
  UserSignInInput,
} from "../inputs/UserInputs";
import { db } from "../middlewares/db";
import { In } from "typeorm";
import { Role } from "../entities/Role";
import type { GraphqlContext } from "../graphql";
import { Token } from "../entities/Token";
import { ApolloError } from "apollo-server-express";
import { sendMail } from "../helpers/sendMail";

export class UserResolver {
  @Authorized()
  @Query(() => User)
  async me(@Ctx() ctx: GraphqlContext) {
    return await db.manager.findOneOrFail(User, {
      where: {
        id: ctx.user.id,
      },
      relations: {
        roles: true,
      },
    });
  }

  @Authorized()
  @Query(() => [User])
  async users() {
    return await db.manager.find(User, {
      relations: {
        roles: true,
      },
    });
  }

  @Authorized()
  @Query(() => [User])
  async usersByType(@Arg("input") input: UserByTypeInput) {
    const { type } = input;
    return await db.manager.find(User, {
      where: {
        type,
      },
    });
  }

  @Authorized()
  @Query(() => User)
  async user(@Arg("input") input: UserInput) {
    const { id } = input;
    return await db.manager.find(User, {
      where: {
        id,
      },
    });
  }

  @Authorized(["admin", "moderator", "teacher"])
  @Mutation(() => User)
  async createUser(@Arg("input") input: CreateUserInput) {
    const { email, password, roles, type } = input;
    const existUser = await db.manager.findOneBy(User, { email });

    if (!existUser) {
      try {
        const userRoles = await db.manager.find(Role, {
          where: {
            code: In(roles),
          },
        });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = db.manager.create(User, {
          email,
          type,
          password: hashedPassword,
          roles: userRoles,
        });

        sendMail(email, password)
          .then((res) => res)
          .catch((e) => console.error(e));

        return await db.manager.save(User, newUser);
      } catch (e) {
        return new ApolloError(e.message);
      }
    }

    return new ApolloError("User with such email already exists");
  }

  @Authorized()
  @Mutation(() => User)
  async updateUser(@Arg("input") input: UpdateUserInput) {
    const { id, ...rest } = input;
    const user = await db.manager.findOneBy(User, { id });
    Object.assign(user, { ...rest });

    await db.manager.save(User, user);

    return user;
  }

  @Mutation(() => User)
  async signIn(
    @Arg("input") input: UserSignInInput,
    @Ctx() ctx: GraphqlContext
  ) {
    if (ctx.user) {
      throw new ApolloError("You already logged in!");
    }

    const user = await db.manager.findOne(User, {
      where: { email: input.email },
      select: {
        id: true,
        email: true,
        firstName: true,
        middleName: true,
        avatar: true,
        lastName: true,
        password: true,
        phoneNumber: true,
      },
    });

    if (user) {
      if (await bcrypt.compare(input.password, user.password)) {
        const token = db.manager.create(Token, { user: { id: user.id } });

        await db.manager.save(Token, token);

        user.token = token;
        ctx.user = user;

        return user;
      } else {
        throw new ApolloError("Wrong user password");
      }
    } else {
      return new ApolloError("User with such email not found");
    }
  }

  @Mutation(() => Boolean)
  async signOut(@Ctx() ctx: GraphqlContext) {
    if (ctx.user) {
      await db.manager.softRemove(ctx.user.token);
      return true;
    }
    return false;
  }

  @Authorized(["admin", "teacher", "moderator"])
  @Mutation(() => [String])
  async deleteUsers(@Arg("input") input: UserDeleteInput) {
    const { ids } = input;

    for (const id of ids) {
      const user = await db.manager.findOne(User, { where: { id } });

      if (user) {
        await db.manager.softRemove(User, user);
      }
    }

    return ids;
  }
}
