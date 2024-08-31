import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GetClientByIdQuery } from 'src/client/application/ports/in/queries/get-client-by-id.query';
import { ClientPresenter } from 'src/client/application/ports/out/presenters/client.presenter';
import { GetClientByIdQueryHandler } from 'src/client/application/ports/out/queries/get-client-by-id.query-handler-impl';
import { ResultOrError, Try } from 'src/common/domain/types/error/error';
import { ApplicationErrorEnum } from 'src/common/domain/types/error/generic-type-error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';

@Injectable()
export class GetClientByIdQueryHandlerImpl
  implements GetClientByIdQueryHandler
{
  constructor(private readonly prisma: PrismaService) {}
  async execute(
    value: GetClientByIdQuery,
  ): Promise<ResultOrError<ClientPresenter>> {
    return Try(
      () =>
        this.prisma.client
          .findUniqueOrThrow({
            where: {
              id: value.clientId.value,
            },
          })
          .then(this.mapClient),
      ApplicationErrorEnum.NotFound,
    );
  }

  private mapClient(client: Prisma.clientGetPayload<{}>): ClientPresenter {
    return {
      id: client.id,
      name: client.name,
      email: client.email,
      document: client.document,
      bornDate: client.bornDate,
    };
  }
}
