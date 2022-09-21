import { db } from "../middlewares/db";
import { Role } from "../entities/Role";

const rows = [
  // comment to keep vertical list formatting
  { code: "admin" },
  { code: "moderator" },
  { code: "teacher" },
  { code: "pupil" },
  { code: "parent" },
];

export async function seedRoles() {
  const count = await db.manager.count(Role);

  if (count === 0) {
    const roles = db.manager.create(Role, rows);
    await db.manager.save(Role, roles);
  }
}
