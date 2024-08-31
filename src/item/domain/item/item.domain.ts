import { AggregateRoot } from 'src/common/domain/types/aggregate-root';
import { ItemID } from './item.id';
import { ResultOrError } from 'src/common/domain/types/error/error';
import { EntityProps } from 'src/common/domain/types/repository';
import {
  ApplicationErrorEnum,
  ApplicationException,
} from 'src/common/domain/types/error/generic-type-error';

interface IItemProps {
  description: string;
  price: number;
}

export class Item extends AggregateRoot<ItemID, IItemProps> {
  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  static create(props: IItemProps) {
    return new Item(props);
  }

  update(props: Partial<EntityProps<IItemProps>>) {
    return new Item(props);
  }

  validate(): ResultOrError<void> {
    if (!this.props.description) {
      return ApplicationException.with(
        'Description is required',
        ApplicationErrorEnum.FieldTypeIncompatible,
      );
    }

    if (!this.props.price) {
      return ApplicationException.with(
        'Price is required',
        ApplicationErrorEnum.FieldTypeIncompatible,
      );
    }
  }
}
