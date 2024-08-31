import { EOrderStatus } from 'src/order/domain/enums/order-status.enum';

interface ICreateOrderCommand {
  clientId: number;
  itemId: number[];
  totalPrice: number;
  status: EOrderStatus;
}

export class CreateOrderCommand {
  private readonly _clientId: number;
  private readonly _itemId: number[];
  private readonly _totalPrice: number;
  private readonly _status: EOrderStatus;
  constructor(payload: ICreateOrderCommand) {
    this._clientId = payload.clientId;
    this._itemId = payload.itemId;
    this._totalPrice = payload.totalPrice;
    this._status = payload.status;
  }

  get clientId(): number | null {
    return this._clientId;
  }

  get itemId() {
    return this._itemId;
  }

  get totalPrice() {
    return this._totalPrice;
  }

  get status() {
    return this._status;
  }
}
