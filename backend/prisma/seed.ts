import { PrismaClient } from '@prisma/client';
import { seedUser } from './seeder/user';

const prisma = new PrismaClient();

async function seed() {
  console.log('hi');
  const env = process.env.ENVIRONMENT;
  if (env !== 'production') {
    await seedUser();
  }
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
