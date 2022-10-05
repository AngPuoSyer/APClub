import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SuperAdminSerivce {
  constructor(private readonly prismaService: PrismaService) {}
}
