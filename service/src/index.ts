import "reflect-metadata";
import express from "express";
import cors from "cors";
import config from "./config/default.json";
import { json } from "body-parser";
import { db } from "./middlewares/db";
import { seedRoles } from "./seeds/db.roles";
import { seedUsers } from "./seeds/db.users";
import { seedTypes } from "./seeds/db.types";
import { createApolloServer } from "./middlewares/appolo";
import { attachUser } from "./helpers/attachUser";

(async () => {
  const app = express();
  const apollo = await createApolloServer();

  app.use(json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  try {
    db.initialize().then(async () => {
      await seedTypes();
      await seedRoles();
      await seedUsers();
      app.use(attachUser);
      apollo.applyMiddleware({ app, path: "/" });
      app.listen(config.port, () => {
        console.log(`Приложение успешно запущено на порту ${config.port}`);
      });
    });
  } catch (e) {}
})();
