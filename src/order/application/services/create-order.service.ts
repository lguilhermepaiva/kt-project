import { Injectable } from '@nestjs/common';
import { CreateOrderUseCase } from '../ports/in/use-cases/create-order.use-case';
import { ResultOrError, isError } from 'src/common/domain/types/error/error';
import { Order } from 'src/order/domain/order.domain';
import { CreateOrderCommand } from '../ports/in/commands/create-order.command';
import { OrderRepositoryPort } from '../ports/out/repositories/order.repository';
import { OrderID } from 'src/order/domain/order.id';
import { MessageBrokerService } from 'src/common/application/services/message-broker/message-broker.service';
import { MessageBrokerEvent } from 'src/common/application/ports/in/broker/broker-message.enum';

@Injectable()
export class CreateOrderService implements CreateOrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepositoryPort,
    private readonly broker: MessageBrokerService,
  ) {}
  async execute(value: CreateOrderCommand): Promise<ResultOrError<Order>> {
    const order = Order.create({
      clientId: value.clientId,
      itemId: value.itemId,
      totalPrice: value.totalPrice,
      status: value.status,
    });

    await this.orderRepository.persist(order);

    return order;
  }
}
