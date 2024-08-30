import { Injectable } from '@nestjs/common';
import { ClientRepositoryPort } from 'src/client/application/ports/out/repositories/client.repository';
import { Client } from 'src/client/domain/client/client.domain';
import { ClientID } from 'src/client/domain/client/client.id';
import { ClientMapper } from 'src/client/infrastructure/mappers/schema-client.mapper';
import {
  isError,
  ResultOrError,
  Try,
} from 'src/common/domain/types/error/error';
import { ApplicationErrorEnum } from 'src/common/domain/types/error/generic-type-error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';

@Injectable()
export class ClientPrismaRepository implements ClientRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}
  getById(id: ClientID): Promise<ResultOrError<Client>> {
    return Try(
      () =>
        this.prisma.client
          .findUniqueOrThrow({ where: { id: id.value } })
          .then(ClientMapper.toDomain),
      ApplicationErrorEnum.NotFound,
    );
  }

  async persist(aggregate: Client): Promise<ResultOrError<void>> {
    const err = aggregate.validate();

    if (isError(err)) return err;

    await this.prisma.client.upsert({
      where: { id: aggregate.persisted ? aggregate.id.value : 0 },
      update: ClientMapper.toPersistence(aggregate),
      create: ClientMapper.toPersistence(aggregate),
    });
  }
}
