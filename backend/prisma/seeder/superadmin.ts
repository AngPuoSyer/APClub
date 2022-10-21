import { PrismaClient } from '@prisma/client';
import { isEmpty } from 'lodash';
import { hashSync, genSaltSync } from 'bcrypt';

const prisma = new PrismaClient();

export const seedSuperAdmin = async () => {
  const check = await prisma.superAdmin.findMany();
  if (!isEmpty(check)) return;
  return prisma.superAdmin.create({
    data: {
      username: 'admin',
      password: hashSync('admin', genSaltSync(10)),
    },
  });
};
