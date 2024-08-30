import { Global, Injectable, Module, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    let log: (Prisma.LogLevel | Prisma.LogDefinition)[] = [];

    if (process.env.NODE_ENV === 'production') log = [];

    super({ log });
  }

  onModuleInit() {
    this.$connect();
  }
}

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
