interface IGetClientFilteredProps {
  name?: string;
  document?: string;
}

export class GetClientFilteredQuery {
  private readonly _name?: string;
  private readonly _document?: string;
  constructor(props: IGetClientFilteredProps) {
    this._name = props.name;
    this._document = props.document;
  }

  get name() {
    return this._name;
  }

  get document() {
    return this._document;
  }
}
