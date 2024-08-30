import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GetClientFilteredQueryHandler } from 'src/client/application/ports/out/queries/get-client-filtered.query-handler';
import { GetClientFilteredRequest } from '../requests/get-client-filtered.request';
import { CreateClientRequest } from '../requests/create-client.request';
import { CreateClientUseCase } from 'src/client/application/ports/in/use-cases/create-client.use-case';

@Controller('clients')
export class ClientController {
  constructor(
    private readonly getClientFilteredQueryHandler: GetClientFilteredQueryHandler,
    private readonly createClientUseCase: CreateClientUseCase,
  ) {}

  @Get()
  getClients(@Query() query: GetClientFilteredRequest) {
    return this.getClientFilteredQueryHandler.execute(
      GetClientFilteredRequest.toQuery(query),
    );
  }

  @Post()
  createClient(@Body() body: CreateClientRequest) {
    return this.createClientUseCase.execute(
      CreateClientRequest.toCommand(body),
    );
  }
}
