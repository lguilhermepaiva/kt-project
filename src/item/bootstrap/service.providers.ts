import { Provider } from '@nestjs/common';
import { CreateItemUseCase } from '../application/ports/in/use-cases/create-item.use-case';
import { CreateItemService } from '../application/services/create-item.service';

export const ServiceProviders: Provider[] = [
  {
    provide: CreateItemUseCase,
    useClass: CreateItemService,
  },
];
