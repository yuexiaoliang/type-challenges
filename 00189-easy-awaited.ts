// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>


// ============= Your Code Here =============
/**
 * - 如果使用 Promise 类型的话，`type T` 类型会缺少 catch, finally，所以这里使用 PromiseLike
 *
 * type MyAwaited<T extends PromiseLike<any>>
 * - 限制参数 T 的类型
 *
 * T extends PromiseLike<infer U>
 * - 使用 U 接收 T 的泛型参数
 *
 *
 * U extends PromiseLike<any> ? MyAwaited<U> : U
 * - 如果 U 是 PromiseLike 类型的话，递归调用 MyAwaited<U>
 */
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any> ? MyAwaited<U> : U
  : never

