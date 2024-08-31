import { Module } from '@nestjs/common';
import { ItemController } from '../infrastructure/adapters/in/controllers/item.controller';
import { ServiceProviders } from './service.providers';
import { RepositoryProviders } from './repository.providers';
import { QueryProviders } from './query.providers';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [...ServiceProviders, ...RepositoryProviders, ...QueryProviders],
})
export class ItemsModule {}
