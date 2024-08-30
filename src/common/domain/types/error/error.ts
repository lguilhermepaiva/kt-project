import {
  ApplicationErrorEnum,
  ApplicationException,
} from './generic-type-error';

export type ResultOrError<T> = T | ApplicationException;

export async function Try<R>(
  t: () => R | Promise<R>,
  err: ApplicationErrorEnum = ApplicationErrorEnum.InfrastructureError,
  c?: () => void,
): Promise<ResultOrError<R>> {
  try {
    const r = await t();
    return r;
  } catch (e) {
    if (c) c();
    return ApplicationException.with(e.message, err);
  }
}

export function isError(value: any): value is ApplicationException;
export function isError(value: any): value is ApplicationException {
  return value instanceof ApplicationException;
}

export function notError<T>(value: ResultOrError<T>): value is T;
export function notError<T>(value: ResultOrError<T>): value is T {
  return !(value instanceof ApplicationException);
}

export function resultOrNull<T>(value: ResultOrError<T>): T | null {
  return isError(value) ? null : value;
}
