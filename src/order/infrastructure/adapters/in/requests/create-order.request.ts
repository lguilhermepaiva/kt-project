import { IsEnum, IsNumber } from 'class-validator';
import { CreateClientCommand } from 'src/client/application/ports/in/commands/create-client.command';
import { CreateOrderCommand } from 'src/order/application/ports/in/commands/create-order.command';
import { EOrderStatus } from 'src/order/domain/enums/order-status.enum';

export class CreateOrderRequest {
  @IsNumber()
  clientId: number;

  @IsNumber({}, { each: true })
  itemId: number[];

  @IsNumber()
  totalPrice: number;

  @IsEnum(EOrderStatus)
  status: string;

  static toCommand(request: CreateOrderRequest): CreateOrderCommand {
    return new CreateOrderCommand({
      clientId: request.clientId,
      itemId: request.itemId,
      totalPrice: request.totalPrice,
      status: request.status as EOrderStatus,
    });
  }
}
