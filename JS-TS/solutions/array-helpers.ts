/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

function assertSource<T>(source: readonly T[] | null | undefined, fnName: string): asserts source is readonly T[] {
  if (source == null) {
    throw new TypeError(`${fnName}: source is null or undefined`);
  }
}

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  assertSource(source, "mapArray");

  const result: R[] = [];
  for (let i = 0; i < source.length; ++i) {
    result.push(mapper(source[i], i));
  }

  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  assertSource(source, "filterArray");

  const result: T[] = [];
  for (let i = 0; i < source.length; ++i) {
    const item = source[i];
    if (predicate(item, i)) {
      result.push(item);
    }
  }

  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
    assertSource(source, "reduceArray");

  let acc = initial;
  for (let i = 0; i < source.length; i += 1) {
    acc = reducer(acc, source[i], i);
  }
  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  assertSource(source, "partition");
  
  const passed: T [] = [];
  const failed: T[] = [];

  for (let i = 0; i < source.length; ++i) {
    const item = source[i];
    if (predicate (item)) {
      passed.push (item);
    }
    else {
      failed.push(item);
    }
  }
  return [passed, failed];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  assertSource(source, "groupBy");

  const result = {} as Record <K, T[]>;

  for (let i = 0; i < source.length; ++i) {
    const item = source [i];
    const key = keySelector (item);
    const bucket = result [key];
    if (bucket) {
      bucket.push(item);
    }
    else {
      result [key] = [item];
    }
  }
  return result;
}
