import request from '@/utils/request'
import { addKey } from '@/utils/table'
import { OpenCityParams } from './data'

export default {
   async getList() {
      const res = await request('/open_city')
      // eslint-disable-next-line no-console
      if (res && +res.code === 0) {
         const { result, code } = res
         result.item_list = addKey(result.item_list)
         if (+code === 0) return result
         return res
      }
      throw Error('网络错误')
   },
   async openCity(data: OpenCityParams) {
      const res = await request('/city/open', {
         data,
      })
      return res && +res.code === 0 ? res.result : '开通失败'
   }
}

export * from './data'