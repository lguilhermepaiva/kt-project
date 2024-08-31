import { Provider } from '@nestjs/common';
import { OrderRepositoryPort } from '../application/ports/out/repositories/order.repository';
import { OrderPrismaRepository } from '../infrastructure/adapters/out/repositories/order.prisma.repository';

export const RepositoryProviders: Provider[] = [
  {
    provide: OrderRepositoryPort,
    useClass: OrderPrismaRepository,
  },
];
