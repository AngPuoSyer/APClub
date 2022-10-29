import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ClubEventStatusEnum, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EventMemberService {
  constructor(private readonly prismaService: PrismaService) {}

  async joinEvent(eventId: string, userId: string, select: any) {
    const [event, user] = await this.prismaService.$transaction([
      this.prismaService.clubEvent.findFirst({
        where: {
          id: eventId,
          status: ClubEventStatusEnum.AWAITING,
        },
      }),
      this.prismaService.user.findFirst({
        where: {
          id: userId,
        },
      }),
    ]);
    if (!event || !user)
      throw new NotFoundException(
        user ? 'Event does not exist' : 'User does not exist',
      );
    if (event.memberOnly) {
      const member = await this.prismaService.clubMember.findUnique({
        where: {
          userId_clubId: {
            userId,
            clubId: event.clubId,
          },
        },
      });
      if (!member) throw new UnauthorizedException('Event is for member only');
    }
    return this.create({
      data: {
        eventId,
        userId,
      },
      ...select,
    });
  }

  create(data: Prisma.ClubEventMemberCreateArgs) {
    return this.prismaService.clubEventMember.create(data);
  }

  update(data: Prisma.ClubEventMemberUpdateArgs) {
    return this.prismaService.clubEventMember.update(data);
  }

  findOne(data: Prisma.ClubEventMemberFindFirstArgs) {
    return this.prismaService.clubEventMember.findFirst(data);
  }

  findMany(data: Prisma.ClubEventMemberFindManyArgs) {
    return this.prismaService.clubEventMember.findMany(data);
  }

  delete(data: Prisma.ClubEventMemberDeleteArgs) {
    return this.prismaService.clubEventMember.delete(data);
  }
}
