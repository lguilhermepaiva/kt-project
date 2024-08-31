import { Module } from '@nestjs/common';
import { ServiceProviders } from './service.providers';
import { RepositoryProviders } from './repository.providers';
import { QueryProviders } from './query.providers';
import { OrderController } from '../infrastructure/adapters/in/controllers/order.controller';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [...ServiceProviders, ...RepositoryProviders, ...QueryProviders],
})
export class OrdersModule {}
