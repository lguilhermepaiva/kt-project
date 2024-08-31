import { Provider } from '@nestjs/common';
import { CreateOrderUseCase } from '../application/ports/in/use-cases/create-order.use-case';
import { CreateOrderCommand } from '../application/ports/in/commands/create-order.command';
import { CreateOrderService } from '../application/services/create-order.service';

export const ServiceProviders: Provider[] = [
  {
    provide: CreateOrderUseCase,
    useClass: CreateOrderService,
  },
];
