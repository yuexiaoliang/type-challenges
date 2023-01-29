// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>
];

// ============= Your Code Here =============

/**
 * <T extends readonly any[]>
 * 限制 T 是一个数组
 *
 * T['length']
 * 用 length 取长度
 */
type Length<T extends readonly any[]> = T['length'];
