import { db } from "../middlewares/db";
import { UserType } from "../entities/UserType";

const rows = [
  { name: "admin" },
  { name: "teacher" },
  { name: "pupil" },
  { name: "parent" },
];

export const seedTypes = async () => {
  const count = await db.manager.count(UserType);

  if (count === 0) {
    const types = db.manager.create(UserType, rows);
    await db.manager.save(UserType, types);
  }
};
