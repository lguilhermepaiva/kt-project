import { Module } from '@nestjs/common';
import { ClientController } from '../infrastructure/adapters/in/controllers/client.controller';
import { ServiceProviders } from './service.providers';
import { RepositoryProviders } from './repository.providers';
import { QueryProviders } from './query.providers';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: [...ServiceProviders, ...RepositoryProviders, ...QueryProviders],
})
export class ClientsModule {}
