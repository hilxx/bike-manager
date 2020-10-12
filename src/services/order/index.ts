import request from '@/utils/request'
import { addKey } from '@/utils/table'

export default {
   async getList() {
      const res: any = await request('/order/list')
      if (res && +res.code === 0) {
         const { result, code } = res
         result.item_list = addKey(result.item_list)
         if (+code === 0) return result
         return res.result
      }
      return res
   }
}