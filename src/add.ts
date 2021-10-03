// type AddType = (n1: number, n2: number) => number;
type AddType<T> = (n1: T, n2: T) => T;

export const add: AddType<number> = (n1, n2)=> {
  return n1 + n2;
}