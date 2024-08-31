import { Module } from '@nestjs/common';
import { AppService } from '../application/services/app.service';
import { AppController } from '../infrastructure/adapters/in/app.controller';
import { PrismaModule } from '../infrastructure/db/prisma/prisma.service';
import { ClientsModule } from 'src/client/bootstrap/clients.module';
import { BrokerModule } from './broker.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ItemsModule } from 'src/item/bootstrap/item.module';
import { OrdersModule } from 'src/order/bootstrap/order.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    PrismaModule,
    ClientsModule,
    ItemsModule,
    OrdersModule,
    BrokerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
