import {
  ClubAdminRoleEnum,
  ClubStatusEnum,
  PrismaClient,
} from '@prisma/client';
import { isEmpty } from 'lodash';

const prisma = new PrismaClient();

export const seedClub = async () => {
  const check = await prisma.club.findMany();
  if (!isEmpty(check)) return;
  const users = await prisma.user.findMany({
    orderBy: [
      {
        createdAt: 'asc',
      },
    ],
  });
  return prisma.club.create({
    data: {
      name: 'Asia Pacific University Japanese Cultural Club',
      status: ClubStatusEnum.ACTIVE,
      label: 'APUJCC',
      description: 'Japanese Cultural Club',
      clubAdmin: {
        createMany: {
          data: [
            {
              userId: users[0].id,
              role: ClubAdminRoleEnum.PRESIDENT,
              roleLabel: 'President',
            },
            {
              userId: users[1].id,
              role: ClubAdminRoleEnum.ASSISTANT_SECRETARY,
              roleLabel: 'Assistant Secretary',
            },
            {
              userId: users[2].id,
              role: ClubAdminRoleEnum.VICE_PRESIDENT,
              roleLabel: 'Vice President',
            },
            {
              userId: users[3].id,
              role: ClubAdminRoleEnum.SECRETARY,
              roleLabel: 'Secretary',
            },
            {
              userId: users[4].id,
              role: ClubAdminRoleEnum.TREASURER,
              roleLabel: 'Treasurer',
            },
            {
              userId: users[5].id,
              role: ClubAdminRoleEnum.COMMITEE,
              roleLabel: 'Tech Guy',
            },
          ],
        },
      },
    },
  });
};
