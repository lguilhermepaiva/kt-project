import { Identifier } from './identifier';
import { ResultOrError } from './error/error';
import { EntityPresenter, Mapper } from 'src/common/mapper/mapper';

const isEntity = (v: any): v is Entity<any, any> => {
  return v instanceof Entity;
};

export type EntityIdentityValue<T> =
  T extends Entity<infer I, any>
    ? I extends Identifier<infer Z>
      ? Z
      : never
    : never;

export abstract class Entity<I extends Identifier<Z>, T, Z = any> {
  protected _id?: I;
  protected readonly props: T;

  constructor(props: T, id?: I) {
    this.props = props;
    this._id = id;
  }

  get id(): I {
    return this._id!;
  }

  get persisted() {
    return !!this._id;
  }

  set id(value: I) {
    this._id = value;
  }

  public equals(object?: Entity<I, T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    if (!this._id) {
      return false;
    }

    return this.id === object.id;
  }

  public getProps(): T {
    return this.props;
  }

  abstract validate(): ResultOrError<void>;

  toPresenter(): EntityPresenter<Entity<I, T>> {
    return Mapper.toPresenter(this) as EntityPresenter<Entity<I, T>>;
  }
}
