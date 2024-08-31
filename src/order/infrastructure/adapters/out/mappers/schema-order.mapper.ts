import { Prisma } from '@prisma/client';
import { EOrderStatus } from 'src/order/domain/enums/order-status.enum';
import { Order } from 'src/order/domain/order.domain';

type OrderSchema = Prisma.orderGetPayload<{
  include: {
    items: true;
  };
}>;

export class OrderMapper {
  static toDomain(order: OrderSchema): Order {
    return Order.create({
      clientId: order.clientId,
      itemId: order.items.map((item) => item.id),
      totalPrice: order.totalPrice.toNumber(),
      status: order.status as EOrderStatus,
    });
  }

  static toPersistencte(order: Order): Prisma.orderCreateInput {
    return {
      client: {
        connect: { id: order.clientId },
      },
      totalPrice: order.totalPrice,
      status: order.status,
      items: {
        connect: order.itemId.map((id) => ({ id })),
      },
    };
  }
}
