import { Module } from '@nestjs/common';
import { AppService } from '../application/services/app.service';
import { AppController } from '../infrastructure/adapters/in/app.controller';
import { PrismaModule } from '../infrastructure/db/prisma/prisma.service';
import { ClientsModule } from 'src/client/bootstrap/clients.module';

@Module({
  imports: [PrismaModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
