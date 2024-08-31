import { Prisma } from '@prisma/client';
import { Item } from 'src/item/domain/item/item.domain';

type ItemSchema = Prisma.itemGetPayload<{}>;

export class ItemMapper {
  static toDomain(item: ItemSchema): Item {
    return Item.create({
      description: item.description,
      price: item.price.toNumber(),
    });
  }

  static toPersistence(item: Item): Prisma.itemUncheckedCreateInput {
    return {
      description: item.description,
      price: item.price,
    };
  }
}
