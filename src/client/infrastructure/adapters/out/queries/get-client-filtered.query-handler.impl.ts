import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { GetClientFilteredQuery } from 'src/client/application/ports/in/queries/get-client-filtered.query';
import { ClientPresenter } from 'src/client/application/ports/out/presenters/client.presenter';
import { GetClientFilteredQueryHandler } from 'src/client/application/ports/out/queries/get-client-filtered.query-handler';
import { ResultOrError } from 'src/common/domain/types/error/error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';

@Injectable()
export class GetClientFilteredQueryHandlerImpl
  implements GetClientFilteredQueryHandler
{
  constructor(private readonly prisma: PrismaService) {}
  async execute(
    value: GetClientFilteredQuery,
  ): Promise<ResultOrError<ClientPresenter[]>> {
    const clients = await this.prisma.client.findMany({
      where: {
        name: value.name,
        document: value.document,
      },
    });

    return clients.map(this.mapClient);
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
