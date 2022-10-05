import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ClubAdminService {
  constructor(private readonly prismaService: PrismaService) {}
}
