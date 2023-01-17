import { db } from '../middlewares/db';
import { User } from '../entities/User';
import { In } from 'typeorm';
import { Role } from '../entities/Role';
import bcrypt from 'bcryptjs';

const rows = [{ email: 'makso16108@gmail.com', password: '123456', type: 'admin' }];

export const seedUsers = async () => {
  for (const row of rows) {
    const exist = await db.manager.findOneBy(User, { email: row.email });

    if (!exist) {
      const roles = await db.manager.find(Role, {
        where: {
          code: In(['admin']),
        },
      });

      const hashedPassword = await bcrypt.hash(row.password, 10);

      const newUser = db.manager.create(User, {
        ...row,
        password: hashedPassword,
        roles,
      });

      await db.manager.save(User, newUser);
    }
  }
};
