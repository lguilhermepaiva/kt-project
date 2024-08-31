import { ClientID } from 'src/client/domain/client/client.id';

export class GetClientByIdQuery {
  private readonly _clientId: ClientID;
  constructor(clientId: ClientID) {
    this._clientId = clientId;
  }

  get clientId() {
    return this._clientId;
  }
}
