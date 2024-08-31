interface ICreateItemProps {
  description: string;
  price: number;
}

export class CreateItemCommand {
  private readonly _description: string;
  private readonly _price: number;
  constructor(dto: ICreateItemProps) {
    this._description = dto.description;
    this._price = dto.price;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }
}
