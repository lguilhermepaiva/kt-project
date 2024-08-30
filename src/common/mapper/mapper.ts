import { Entity } from '../domain/types/entity';
import { Identifier } from '../domain/types/identifier';
import { ValueObject } from '../domain/value-objects/value-object';

export type EntityPresenter<T> =
  T extends Entity<infer Z, infer props>
    ? {
        id: EntityPresenter<Z>;
      } & { [K in keyof props]: EntityPresenter<props[K]> }
    : T extends Identifier<infer U>
      ? U
      : T extends ValueObject<infer Z>
        ? Z
        : T extends Array<infer Z>
          ? Array<EntityPresenter<Z>>
          : T;

export type AttributePresenter<T> =
  T extends Identifier<infer U>
    ? U
    : T extends ValueObject<infer Z>
      ? Z
      : T extends Array<infer Z>
        ? Array<EntityPresenter<Z>>
        : T;

export type NonEntityKeys<T> = {
  [P in keyof T]: Exclude<T[P], undefined> extends Entity<any, any>
    ? never
    : Exclude<T[P], undefined> extends Array<Entity<any, any>>
      ? never
      : P;
}[keyof T];

export type RemoveEntities<T> = Pick<T, NonEntityKeys<T>>;

export type UnitPresenter<T> =
  T extends Entity<infer Z, infer props>
    ? {
        id: AttributePresenter<Z>;
      } & {
        [K in keyof RemoveEntities<props>]: props[K] extends infer R
          ? AttributePresenter<R>
          : never;
      }
    : never;

export class Mapper {
  static toPresenter<T>(I: T): EntityPresenter<T> {
    if (Array.isArray(I))
      return I.map(Mapper.toPresenter) as EntityPresenter<T>;
    if (I instanceof Identifier)
      return I.value as unknown as EntityPresenter<T>;
    if (I instanceof ValueObject) return Mapper.toPresenter(I.getValue());
    if (I instanceof Entity)
      return { id: I.id?.value, ...Mapper.toPresenter(I.getProps()) };
    if (I instanceof Date) return I as unknown as EntityPresenter<T>;
    if (typeof I !== 'object' || I === null)
      return I as unknown as EntityPresenter<T>;
    return Object.entries(I as any).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: Mapper.toPresenter(value),
      };
    }, {}) as EntityPresenter<T>;
  }
}
