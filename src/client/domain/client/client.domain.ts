import { AggregateRoot } from 'src/common/domain/types/aggregate-root';
import { DateVO } from 'src/common/domain/value-objects/date-vo';
import { ClientID } from './client.id';
import { EntityProps } from 'src/common/domain/types/repository';

interface IClientProps {
  name: string;
  email: string;
  document: string;
  bornDate: DateVO;
}

export class Client extends AggregateRoot<ClientID, IClientProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get document() {
    return this.props.document;
  }

  get bornDate() {
    return this.props.bornDate;
  }

  static create(props: IClientProps) {
    return new Client(props);
  }

  update(props: Partial<EntityProps<IClientProps>>) {
    return new Client(props);
  }

  validate() {
    if (!this.props.name) {
      throw new Error('Name is required');
    }

    if (!this.props.email) {
      throw new Error('Email is required');
    }

    if (!this.props.document) {
      throw new Error('Document is required');
    }

    if (!this.props.bornDate) {
      throw new Error('Born date is required');
    }
  }
}
