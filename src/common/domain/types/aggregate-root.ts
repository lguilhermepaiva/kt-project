import { Entity } from './entity';
import { Identifier } from './identifier';

export abstract class AggregateRoot<
  I extends Identifier<any>,
  T,
> extends Entity<I, T> {}
