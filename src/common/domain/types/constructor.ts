export type NonMethodKeys<T> = {
  [P in keyof T]: T[P] extends Function ? never : P;
}[keyof T];
export type RemoveMethods<T> = Pick<T, NonMethodKeys<T>>;
