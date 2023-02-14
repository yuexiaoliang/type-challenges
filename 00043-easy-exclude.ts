// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>, Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>, Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>];

// ============= Your Code Here =============
/**
 * 泛型遇到联合类型和 extends 的时候，会拆解开一一进行判断，如下：
 *
 * MyExclude<'a' | 'b' | 'c', 'a'>
 *  'a' extends 'a' ? never : 'a' |
 *  'b' extends 'a' ? never : 'a' |
 *  'c' extends 'a' ? never : 'a'
 *  => 'b' | 'c'
 *
 * ------
 *
 * MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
 *  'a' extends 'a' | 'b' ? never : 'a' |
 *  'b' extends 'a' | 'b' ? never : 'a' |
 *  'c' extends 'a' | 'b' ? never : 'a'
 *  => 'c'
 */
type MyExclude<T, U> = T extends U ? never : T;
