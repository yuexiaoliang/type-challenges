// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<First<[3, 2, 1]>, 3>>, Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>, Expect<Equal<First<[]>, never>>, Expect<Equal<First<[undefined]>, undefined>>];

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
];

// ============= Your Code Here =============

// 判断是否为空数组
// type First<T extends any[]> = T extends [] ? never : T[0];

// 判断长度是否为 0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// 使用 infer 取第零个元素
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
