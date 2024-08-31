import { UseCase } from 'src/common/application/ports/in/use-case';
import { CreateOrderCommand } from '../commands/create-order.command';
import { Order } from 'src/order/domain/order.domain';

export abstract class CreateOrderUseCase extends UseCase<
  CreateOrderCommand,
  Order
> {}
