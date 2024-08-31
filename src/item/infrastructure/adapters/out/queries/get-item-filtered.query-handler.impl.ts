import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ResultOrError } from 'src/common/domain/types/error/error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';
import { GetItemFilteredQuery } from 'src/item/application/ports/in/queries/get-item-filtered.query';
import { ItemPresenter } from 'src/item/application/ports/out/presenters/item.presenter';
import { GetItemFilteredQueryHandler } from 'src/item/application/ports/out/queries/get-item-filtered.query-handler';

@Injectable()
export class GetItemFilteredQueryHandlerImpl
  implements GetItemFilteredQueryHandler
{
  constructor(private readonly prisma: PrismaService) {}
  async execute(
    value: GetItemFilteredQuery,
  ): Promise<ResultOrError<ItemPresenter[]>> {
    const items = await this.prisma.item.findMany({
      where: {
        description: {
          contains: value.description,
        },
      },
    });

    return items.map(this.mapItem);
  }

  private mapItem(item: Prisma.itemGetPayload<{}>): ItemPresenter {
    return {
      id: item.id,
      description: item.description,
      price: item.price.toNumber(),
    };
  }
}
