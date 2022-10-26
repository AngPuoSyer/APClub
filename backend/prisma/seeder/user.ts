import { PrismaClient } from '@prisma/client';
import { isEmpty } from 'lodash';
import { hashSync, genSaltSync } from 'bcrypt';
import { UserSignUpInput } from '@core/src/modules/auth/dto/create-user.input';

const prisma = new PrismaClient();

const users: UserSignUpInput[] = [
  {
    username: 'Rice',
    email: 'rice@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000000',
    contactNumber: '0123456789',
  },
  {
    username: 'Noodle',
    email: 'noodle@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000001',
    contactNumber: '0123456781',
  },
  {
    username: 'wallnut',
    email: 'wallnut@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000002',
    contactNumber: '0123456782',
  },
  {
    username: 'hazelnut',
    email: 'hazelnut@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000003',
    contactNumber: '0123456783',
  },
  {
    username: 'kimchi',
    email: 'kimchi@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000004',
    contactNumber: '0123456785',
  },
  {
    username: 'omurice',
    email: 'omurice@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000005',
    contactNumber: '0123456786',
  },
  {
    username: 'maid',
    email: 'maid@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000006',
    contactNumber: '0123456787',
  },
  {
    username: 'bamboo',
    email: 'bamboo@mail.com',
    password: 'helloworld',
    tpNumber: 'TP000007',
    contactNumber: '0123456788',
  },
];

export const seedUser = async () => {
  const check = await prisma.user.findMany();
  if (!isEmpty(check)) return;
  return prisma.user.createMany({
    data: users.map((u) => {
      const password = hashSync(u.password, genSaltSync(10));
      return {
        ...u,
        password,
      };
    }),
  });
};
