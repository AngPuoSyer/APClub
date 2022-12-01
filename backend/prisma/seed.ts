import { PrismaClient } from '@prisma/client';
import { seedClub } from './seeder/club';
import { seedSuperAdmin } from './seeder/superadmin';
import { seedUser } from './seeder/user';

const prisma = new PrismaClient();

async function seed() {
  const env = process.env.ENVIRONMENT;
  if (env !== 'production') {
    await seedUser();
    await seedSuperAdmin();
    await seedClub();
  }
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
