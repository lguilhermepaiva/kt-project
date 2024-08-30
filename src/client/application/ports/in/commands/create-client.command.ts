import { DateVO } from 'src/common/domain/value-objects/date-vo';

interface ICreateClientProps {
  name: string;
  email: string;
  document: string;
  bornDate: DateVO;
}

export class CreateClientCommand {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _document: string;
  private readonly _bornDate: DateVO;
  constructor(dto: ICreateClientProps) {
    this._name = dto.name;
    this._email = dto.email;
    this._document = dto.document;
    this._bornDate = dto.bornDate;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get document() {
    return this._document;
  }

  get bornDate() {
    return this._bornDate;
  }
}
