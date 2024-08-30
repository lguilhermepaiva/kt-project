import { Module } from '@nestjs/common';
import { AppService } from '../application/services/app.service';
import { AppController } from '../infrastructure/adapters/in/app.controller';
import { PrismaModule } from '../infrastructure/db/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
