interface IGetItemFilteredProps {
  description?: string;
  price?: number;
}

export class GetItemFilteredQuery {
  private readonly _description?: string;
  private readonly _price?: number;
  constructor(props: IGetItemFilteredProps) {
    this._description = props.description;
    this._price = props.price;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }
}
