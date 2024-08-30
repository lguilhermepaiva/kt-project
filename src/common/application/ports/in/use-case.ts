import { ResultOrError } from '../../../domain/types/error/error';

export abstract class UseCase<I, O> {
  abstract execute(value: I): ResultOrError<O> | Promise<ResultOrError<O>>;
}

export abstract class UnitUseCase<I> {
  abstract execute(
    value: I,
  ): ResultOrError<void> | Promise<ResultOrError<void>>;
}

export abstract class NullaryUseCase<O> {
  abstract execute(): ResultOrError<O> | Promise<ResultOrError<O>>;
}
