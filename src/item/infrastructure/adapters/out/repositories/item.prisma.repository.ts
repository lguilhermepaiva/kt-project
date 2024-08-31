import { Injectable } from '@nestjs/common';
import { ResultOrError, Try } from 'src/common/domain/types/error/error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';
import { ItemRepositoryPort } from 'src/item/application/ports/out/repositories/item.repository';
import { Item } from 'src/item/domain/item/item.domain';
import { ItemID } from 'src/item/domain/item/item.id';
import { ApplicationErrorEnum } from 'src/common/domain/types/error/generic-type-error';
import { ItemMapper } from 'src/item/infrastructure/mappers/schema-item.mapper';

@Injectable()
export class ItemPrismaRepository implements ItemRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  getById(id: ItemID): Promise<ResultOrError<Item>> {
    return Try(
      () =>
        this.prisma.item
          .findUniqueOrThrow({
            where: { id: id.value },
          })
          .then(ItemMapper.toDomain),
      ApplicationErrorEnum.NotFound,
    );
  }

  async persist(aggregate: Item): Promise<ResultOrError<void>> {
    const err = aggregate.validate();

    if (err) return err;

    await this.prisma.item.upsert({
      where: { id: aggregate.persisted ? aggregate.id.value : 0 },
      update: ItemMapper.toPersistence(aggregate),
      create: ItemMapper.toPersistence(aggregate),
    });
  }
}
