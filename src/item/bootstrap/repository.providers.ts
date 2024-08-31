import { Provider } from '@nestjs/common';
import { ItemRepositoryPort } from '../application/ports/out/repositories/item.repository';
import { ItemPrismaRepository } from '../infrastructure/adapters/out/repositories/item.prisma.repository';

export const RepositoryProviders: Provider[] = [
  {
    provide: ItemRepositoryPort,
    useClass: ItemPrismaRepository,
  },
];
