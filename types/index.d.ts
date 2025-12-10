export interface Ctx {
  path: string
  key: string | number | null
  parent: any
  root: any
  value: any
}

export type Validator<T = any> = (value: T, ctx: Ctx) => T

export type ValidatorFactory<Args extends any[] = any[], T = any> = (
  ...args: Args
) => Validator<T>

export function makeCtx (parentCtx: Ctx | null, key: string | number | null, value: any): Ctx

export function formatValue (value: any): string

export function createValidator<Args extends any[] = any[], T = any> (
  name: string,
  handler: (value: any, ctx: Ctx, args: Args) => T
): ValidatorFactory<Args, T>

export function pipe<T = any> (...validators: Validator[]): Validator<T>

export function transform<TIn = any, TOut = any> (
  fn: (value: TIn, ctx: Ctx) => TOut
): Validator<TOut>

export function check<T = any> (
  fn: (value: T, ctx: Ctx) => boolean,
  msg?: string
): Validator<T>

export interface ValidateResult<T = any> {
  valid: boolean
  result: T
  error?: Error
}

export function validate<T = any> (
  schema: Validator<T>,
  value: any,
  rootPath?: string
): ValidateResult<T>

export const required: (msg?: string) => Validator<any>

export const optional: () => Validator<any>

export const string: (msg?: string) => Validator<string>

export const number: (msg?: string) => Validator<number>

export const bigint: (msg?: string) => Validator<bigint>

export const boolean: (msg?: string) => Validator<boolean>

export const symbol: (msg?: string) => Validator<symbol>

export const object: (
  obj: { [key: string]: Validator<any> },
  msg?: string
) => Validator<any>

export const array: (
  validator: Validator<any>,
  msg?: string
) => Validator<any[]>