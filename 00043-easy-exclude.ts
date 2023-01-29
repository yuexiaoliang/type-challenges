// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>, Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>, Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>];

// ============= Your Code Here =============
/**
 * 泛型遇到联合类型和 extends 的时候，会拆解开一一进行判断，如下：
 *
 * MyExclude<'a' | 'b' | 'c', 'a'>
 *  MyExclude<'a', 'a'> => 'a' extends 'a' ? never : 'a' => never
 *  MyExclude<'b', 'a'> => 'b' extends 'a' ? never : 'b' => 'b'
 *  MyExclude<'c', 'a'> => 'c' extends 'a' ? never : 'c' => 'c'
 *  => 'b' | 'c'
 *
 * ------
 *
 * MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
 *  MyExclude<'a', 'a'> => 'a' extends 'a' ? never : 'a' => never
 *  MyExclude<'b', 'a'> => 'b' extends 'a' ? never : 'b' => 'b'
 *  MyExclude<'c', 'a'> => 'c' extends 'a' ? never : 'c' => 'c'
 *  => 'b' | 'c'
 *
 *  MyExclude<'b', 'b'> => 'b' extends 'b' ? never : 'b' => never
 *  MyExclude<'c', 'b'> => 'c' extends 'b' ? never : 'c' => 'c'
 *  => 'c'
 */
type MyExclude<T, U> = T extends U ? never : T;
