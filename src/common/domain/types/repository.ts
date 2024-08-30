import { AggregateRoot } from './aggregate-root';
import { ResultOrError } from './error/error';
import { Entity } from './entity';

export type AggregateIdentity<T> =
  T extends AggregateRoot<infer I, any> ? I : never;

export type AggregateQuery<T> =
  T extends AggregateRoot<any, infer I>
    ? {
        [K in keyof I]: I[K] extends infer R
          ? R extends Entity<any, any>
            ? EntityQuery<R>
            : R
          : never;
      }
    : never;

export type EntityQuery<T> =
  T extends Entity<any, infer I>
    ? {
        [K in keyof I]: I[K] extends infer R
          ? R extends Entity<any, any>
            ? EntityQuery<R>
            : R
          : never;
      }
    : never;

export type AggregateProps<T> =
  T extends AggregateRoot<any, infer I>
    ? Omit<
        {
          [K in keyof I]: I[K] extends infer R
            ? R extends Entity<any, any>
              ? Omit<EntityProps<R>, 'createdAt' | 'updatedAt' | 'deletedAt'>
              : R
            : never;
        },
        'createdAt' | 'updatedAt' | 'deletedAt'
      >
    : never;

export type EntityProps<T> =
  T extends Entity<any, infer I>
    ? Omit<
        {
          [K in keyof I]: I[K] extends infer R
            ? R extends Entity<any, any>
              ? Omit<EntityProps<R>, 'createdAt' | 'updatedAt' | 'deletedAt'>
              : R
            : never;
        },
        'createdAt' | 'updatedAt' | 'deletedAt'
      >
    : never;

export type AggregateCreationAttributes<T> =
  T extends Entity<any, infer I>
    ? Omit<
        {
          [K in keyof I]: I[K] extends infer R
            ? Exclude<
                R,
                Array<Entity<any, any>> | Entity<any, any> | Entity<any, any>[]
              >
            : never;
        },
        'createdAt' | 'updatedAt' | 'deletedAt'
      >
    : never;

export abstract class Repository<T extends AggregateRoot<any, any>> {
  abstract persist(aggregate: T): Promise<ResultOrError<void>>;

  abstract getById(id: AggregateIdentity<T>): Promise<ResultOrError<T>>;
}
