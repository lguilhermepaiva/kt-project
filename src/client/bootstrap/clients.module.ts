import { Module } from '@nestjs/common';
import { ClientController } from '../infrastructure/adapters/in/controllers/client.controller';
import { ServiceProviders } from './service.providers';
import { RepositoryProviders } from './repository.providers';
import { QueryProviders } from './query.providers';
import { ClientListener } from '../infrastructure/adapters/in/events/client.listener';

@Module({
  imports: [],
  controllers: [ClientController, ClientListener],
  providers: [...ServiceProviders, ...RepositoryProviders, ...QueryProviders],
})
export class ClientsModule {}
