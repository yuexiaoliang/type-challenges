// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
/**
 * keyof T => 获取 T 的所有 Key
 * [K in keyof T]: T[K] => 遍历并赋值
 * readonly [K in keyof T]: T[K] => 只读
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
