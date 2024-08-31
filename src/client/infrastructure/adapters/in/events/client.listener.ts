import { Controller } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { GetClientByIdQuery } from 'src/client/application/ports/in/queries/get-client-by-id.query';
import { GetClientByIdQueryHandler } from 'src/client/application/ports/out/queries/get-client-by-id.query-handler-impl';
import { ClientID } from 'src/client/domain/client/client.id';
import { MessageBrokerEvent } from 'src/common/application/ports/in/broker/broker-message.enum';
import { resultOrNull } from 'src/common/domain/types/error/error';

@Controller()
export class ClientListener {
  constructor(
    private readonly getClientByIdQueryHandler: GetClientByIdQueryHandler,
  ) {}

  @OnEvent(MessageBrokerEvent.GET_CLIENT_BY_ID)
  async getClientById({ clientId }: { clientId: number }) {
    const res = await this.getClientByIdQueryHandler.execute(
      new GetClientByIdQuery(new ClientID(clientId)),
    );

    return resultOrNull(res);
  }
}
