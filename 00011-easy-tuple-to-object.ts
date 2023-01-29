// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, '2', 3, '4'] as const;

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// ============= Your Code Here =============

/**
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * 转为元组字面量类型
 *
 * <T extends readonly (string | number)[]>
 * 因为转换后的字面量类型是只读的，所以需要加上 readonly，同时限制类型
 *
 * [K in T[number]]
 * 遍历元组字面量的特定语法
 */
type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K;
};
