// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
/**
 * 0. keyof T => 获取到 T 的所有键
 * 2. KEYS extends keyof T => 限制 KEYS 只能是 T 所有键的子集
 * 3. [KEY in KEYS]: T[KEY] => 遍历并且赋值
 */
type MyPick<T, KEYS extends keyof T> = {
  [KEY in KEYS]: T[KEY];
};
