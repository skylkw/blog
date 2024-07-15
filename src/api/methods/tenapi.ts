import { tenapiAlova } from '..'

// 获取一言
export function getYiyan() {
  return tenapiAlova.Get('/yiyan', { params: { format: 'json' } })
}