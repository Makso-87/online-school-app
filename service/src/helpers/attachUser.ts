import { RequestHandler } from "express";
import { db } from "../middlewares/db";
import { Token } from "../entities/Token";
import { User } from "../entities/User";

// Provide every express Request with user
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const attachUser: RequestHandler = async (req, res, next) => {
  const hash = req.get("authorization");

  if (hash) {
    const token = await db.manager.findOne(Token, {
      where: { hash },
      relations: {
        user: { roles: true },
      },
    });

    if (token) {
      req.user = token.user;
      req.user.token = token;
    }
  }

  next();
};
