import { Injectable } from '@nestjs/common';
import { ResultOrError, Try } from 'src/common/domain/types/error/error';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';
import { OrderRepositoryPort } from 'src/order/application/ports/out/repositories/order.repository';
import { Order } from 'src/order/domain/order.domain';
import { OrderID } from 'src/order/domain/order.id';
import { OrderMapper } from '../mappers/schema-order.mapper';
import { ApplicationErrorEnum } from 'src/common/domain/types/error/generic-type-error';

@Injectable()
export class OrderPrismaRepository implements OrderRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}
  getById(id: OrderID): Promise<ResultOrError<Order>> {
    return Try(() => {
      return this.prisma.order
        .findUniqueOrThrow({
          where: { id: id.value },
          include: { items: true },
        })
        .then((orderPrisma) => OrderMapper.toDomain(orderPrisma));
    }, ApplicationErrorEnum.NotFound);
  }

  async persist(aggregate: Order): Promise<ResultOrError<void>> {
    const err = aggregate.validate();

    if (err) return err;

    await this.prisma.order.upsert({
      where: {
        id: aggregate.persisted ? aggregate.id.value : 0,
      },
      create: OrderMapper.toPersistencte(aggregate),
      update: OrderMapper.toPersistencte(aggregate),
    });
  }
}
