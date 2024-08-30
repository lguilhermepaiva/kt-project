import { Provider } from '@nestjs/common';
import { ClientRepositoryPort } from '../application/ports/out/repositories/client.repository';
import { ClientPrismaRepository } from '../infrastructure/adapters/out/repositories/client.prisma.repository';

export const RepositoryProviders: Provider[] = [
  {
    provide: ClientRepositoryPort,
    useClass: ClientPrismaRepository,
  },
];
