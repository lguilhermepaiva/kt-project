export interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public getValue(): T {
    return this.props;
  }
  abstract equals(vo: ValueObject<T>): boolean;
}
