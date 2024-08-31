import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderUseCase } from 'src/order/application/ports/in/use-cases/create-order.use-case';
import { CreateOrderRequest } from '../requests/create-order.request';

@Controller('orders')
export class OrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  @Post()
  async createOrder(@Body() dto: CreateOrderRequest) {
    return this.createOrderUseCase.execute(CreateOrderRequest.toCommand(dto));
  }
}
