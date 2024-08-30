import { Provider } from '@nestjs/common';
import { CreateClientUseCase } from '../application/ports/in/use-cases/create-client.use-case';
import { CreateClientService } from '../application/services/create-client.service';

export const ServiceProviders: Provider[] = [
  {
    provide: CreateClientUseCase,
    useClass: CreateClientService,
  },
];
