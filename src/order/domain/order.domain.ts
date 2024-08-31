import { AggregateRoot } from 'src/common/domain/types/aggregate-root';
import { OrderID } from './order.id';
import { EOrderStatus } from './enums/order-status.enum';
import {
  ApplicationErrorEnum,
  ApplicationException,
} from 'src/common/domain/types/error/generic-type-error';

interface IOrderProps {
  clientId: number;
  itemId: number[];
  totalPrice: number;
  status: EOrderStatus;
}

export class Order extends AggregateRoot<OrderID, IOrderProps> {
  get clientId() {
    return this.props.clientId;
  }

  get itemId() {
    return this.props.itemId;
  }

  get totalPrice() {
    return this.props.totalPrice;
  }

  get status() {
    return this.props.status;
  }
  changeTotalPrice(totalPrice: number) {
    this.props.totalPrice = totalPrice;
  }

  static create(props: IOrderProps) {
    return new Order(props);
  }

  validate() {
    if (this.props.totalPrice <= 0) {
      return ApplicationException.with(
        'Total price must be greater than 0',
        ApplicationErrorEnum.FieldTypeIncompatible,
      );
    }
  }
}
