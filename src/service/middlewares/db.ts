import { DataSource } from "typeorm";
import { DB_HOST, DB_LOGIN, DB_NAME, DB_PASSWORD, DB_TYPE } from "../env";
import { User } from "../entities/User";
import { Diary } from "../entities/Diary";
import { Journal } from "../entities/Journal";
import { Lesson } from "../entities/Lesson";
import { Material } from "../entities/Material";
import { Role } from "../entities/Role";
import { Schedule } from "../entities/Schedule";
import { SchoolClass } from "../entities/SchoolClass";
import { SchoolSubject } from "../entities/SchoolSubject";
import { UserType } from "../entities/UserType";
import { Token } from "../entities/Token";

export const db = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: 5432,
  username: DB_LOGIN,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [
    // comment to keep vertical list
    User,
    Token,
    Diary,
    Journal,
    Lesson,
    Material,
    Role,
    UserType,
    Schedule,
    SchoolClass,
    SchoolSubject,
  ],
  // logging: true,
  synchronize: true,
});
