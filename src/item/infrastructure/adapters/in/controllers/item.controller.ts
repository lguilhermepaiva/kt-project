import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateItemRequest } from '../requests/create-item.request';
import { GetItemFilteredRequest } from '../requests/get-client-filtered.request';
import { CreateItemUseCase } from 'src/item/application/ports/in/use-cases/create-item.use-case';
import { GetItemFilteredQueryHandler } from 'src/item/application/ports/out/queries/get-item-filtered.query-handler';

@Controller('items')
export class ItemController {
  constructor(
    private readonly getItemFilteredQueryHandler: GetItemFilteredQueryHandler,
    private readonly createItemUseCase: CreateItemUseCase,
  ) {}

  @Get()
  async getItems(@Query() query: GetItemFilteredRequest) {
    return this.getItemFilteredQueryHandler.execute(
      GetItemFilteredRequest.toQuery(query),
    );
  }

  @Post()
  createItem(@Body() body: CreateItemRequest) {
    return this.createItemUseCase.execute(CreateItemRequest.toCommand(body));
  }
}
